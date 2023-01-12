using Azure.Messaging.ServiceBus;
using ICL.React.Frontend.Entitites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Specialized;
using System.Globalization;
using System.Net;
using System.Text;
using System.Xml;
using System.Xml.Serialization;
using Microsoft.Extensions.Configuration;

namespace ICL.React.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiveOrderController : ControllerBase
    {
        private static readonly HttpClient _httpClient = new HttpClient();

        public ReceiveOrderController()
        {

        }

        [HttpPost]
        public async Task<IActionResult> ReceiveOrder()
        {
            try
            {
                var formCollection = await Request.ReadFormAsync();
                var file = formCollection.Files.First();
                if (file.ContentType != "text/xml" && file.ContentType != "application/json")
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "File is not a valid type");
                }
                var asn = new StringBuilder();
                using (var reader = new StreamReader(file.OpenReadStream()))
                {
                    while (reader.Peek() >= 0)
                        asn.AppendLine(reader.ReadLine());
                }

                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.LoadXml(asn.ToString());

                XmlNode xmlNode = xmlDoc.SelectSingleNode("//Booking");
                string asndata;

                XmlSerializer serial = new XmlSerializer(typeof(Booking));

                using (XmlNodeReader reader = new XmlNodeReader(xmlNode))
                {
                    Booking booking = (Booking)serial.Deserialize(reader);
                    PurchaseOrder po = new PurchaseOrder();
                    List<Product> products = new List<Product>();
                    po.Id = Guid.NewGuid();
                    po.CreateDate = DateTime.Now;
                    po.uuid = Guid.NewGuid();
                    po.BookingNo = booking.BasicDetails.BookingNo;
                    po.BookingDate = DateTime.ParseExact(booking.BasicDetails.BookingDate.ToString(), "yyyyMMdd", CultureInfo.InvariantCulture);
                    po.AsnFile = asn.ToString();
                    po.ProcessType = booking.Services.Service.ProcessType;
                    po.PlaceOfReceipt = booking.BasicDetails.Movement.PlaceOfReceipt.Code;
                    po.PlaceOfDelivery = booking.BasicDetails.Movement.PlaceOfDelivery.Code;
                    po.DeliveryStatus = 0;
                    po.SubmitStatus = "Available";

                    foreach (var prod in booking.Products)
                    {
                        Product product = new Product();
                        product.Id = Guid.NewGuid();
                        product.CreateDate = DateTime.Now;
                        product.uuid = Guid.NewGuid();
                        product.PoUuid = po.uuid;
                        product.LineItemId = prod.LineItemId;
                        product.ProductCode = prod.ProductCode.ToString();
                        product.Quantity = prod.Quantity.Value + " " + prod.Quantity.Uom;
                        product.UnitDimension = prod.UnitDimension.Length + "*" + prod.UnitDimension.Width + "*" +
                            prod.UnitDimension.Height + " " + prod.UnitDimension.Uom;
                        product.UnitVolume = prod.UnitVolume.ToString();
                        product.UnitWeight = prod.UnitWeight.GrossWeight + " " + prod.UnitWeight.Uom;
                        product.UnitRate = prod.UnitRate.ToString();
                        product.OrderDetails = prod.OrderDetails.SKULineNo;
                        product.SKULineNo = prod.OrderDetails.SKULineNo;
                        products.Add(product);
                    }

                    po.products = products;

                    asndata = JsonConvert.SerializeObject(po);
                }

                var bookingRequestContent = new StringContent(asndata, Encoding.UTF8, "application/json");
                _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", null);
                var dwhResponse = await _httpClient.PostAsync("https://localhost:7014/api/PurchaseOrder", bookingRequestContent);
                var responseContent = await dwhResponse.Content.ReadAsStringAsync();

                return Ok(new { message = "Saved successfully" });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
    }
}
