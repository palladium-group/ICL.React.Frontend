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
using System.Dynamic;
using System.Xml.Linq;
using static Azure.Core.HttpHeader;
using Microsoft.AspNetCore.DataProtection.KeyManagement;

namespace ICL.React.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiveOrderController : ControllerBase
    {
        private static readonly HttpClient _httpClient = new HttpClient();
        private IConfiguration _configuration;

        public ReceiveOrderController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("inbound")]
        public async Task<IActionResult> ReceiveInboundOrder()
        {
            var uri = _configuration.GetSection("DWH_URI");
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

            return await ReceiveOrderAsync("inbound", asn, uri);
        }

        [HttpPost("outbound")]
        public async Task<IActionResult> ReceiveOutboundOrderAsync()
        {
            var uri = _configuration.GetSection("DWH_URI");
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

            return await ReceiveOrderAsync("outbound", asn, uri);
        }


        private async Task<IActionResult> ReceiveOrderAsync(string processType, StringBuilder asn, IConfigurationSection uri)
        {
            try
            {
                XDocument doc = XDocument.Parse(asn.ToString()); //or XDocument.Load(path)
                string jsonText = JsonConvert.SerializeXNode(doc);
                dynamic dyn = JsonConvert.DeserializeObject<ExpandoObject>(jsonText);

                string asndata;
                var booking = dyn.Message.Bookings.Booking;

                //Booking booking = (Booking)serial.Deserialize(reader);
                PurchaseOrder po = new PurchaseOrder();
                List<Product> products = new List<Product>();
                po.Id = Guid.NewGuid();
                po.CreateDate = DateTime.Now;
                po.uuid = Guid.NewGuid();
                if (((IDictionary<String, object>)booking).ContainsKey("BasicDetails"))
                {
                    po.BookingNo = booking.BasicDetails.BookingNo;
                    if (processType == "outbound" && !po.BookingNo.ToString().StartsWith("CO"))
                    {
                        return StatusCode(StatusCodes.Status400BadRequest, "Incorrect file uploaded. Ensure your Booking Number starts with CO.");
                    }
                    else if (processType == "inbound" && !po.BookingNo.ToString().StartsWith("ASN"))
                    {
                        return StatusCode(StatusCodes.Status400BadRequest, "Incorrect file uploaded. Ensure your Booking Number starts with ASN.");
                    }
                    po.BookingDate = DateTime.ParseExact(booking.BasicDetails.BookingDate.ToString(), "yyyyMMdd", CultureInfo.InvariantCulture);
                    if (((IDictionary<String, object>)booking.BasicDetails).ContainsKey("Movement"))
                    {
                        po.PlaceOfReceipt = booking.BasicDetails.Movement.PlaceOfReceipt.Code;
                        po.PlaceOfDelivery = booking.BasicDetails.Movement.PlaceOfDelivery.Code;
                        po.TransportationMode = booking.BasicDetails.Movement.TransportationMode;
                    }
                }
                po.AsnFile = asn.ToString();
                if (((IDictionary<String, object>)booking).ContainsKey("Services"))
                {
                    foreach (var service in booking.Services)
                    {
                        var value = ((KeyValuePair<string, object>)service).Value;
                        if (((IDictionary<String, object>)value).ContainsKey("ProcessType"))
                        {
                            dynamic expandoObject = JsonConvert.DeserializeObject<ExpandoObject>(JsonConvert.SerializeObject(value));
                            foreach (var property in expandoObject)
                            {
                                if (property.Key == "ProcessType")
                                {
                                    po.ProcessType = property.Value;
                                }
                            }
                        }
                    }
                }
                po.DeliveryStatus = 0;
                po.SubmitStatus = "Available";

                foreach (var prod in booking.Products.Product)
                {
                    //var xProd = ((KeyValuePair<String, object>)prod).Value;
                    Product product = new Product();
                    product.Id = Guid.NewGuid();
                    product.CreateDate = DateTime.Now;
                    product.uuid = Guid.NewGuid();
                    product.PoUuid = po.uuid;
                    product.LineItemId = "";
                    try
                    {
                        if (((IDictionary<String, object>)prod).ContainsKey("ProductCode"))
                        {
                            product.ProductCode = prod.ProductCode.ToString();
                        }
                        if (((IDictionary<String, object>)prod).ContainsKey("Quantity"))
                        {
                            product.Quantity = prod.Quantity.Value + " " + prod.Quantity.Uom;
                        }
                        if (((IDictionary<String, object>)prod).ContainsKey("UnitDimension"))
                        {
                            product.UnitDimension = prod.UnitDimension.Length + "*" + prod.UnitDimension.Width + "*" +
                            prod.UnitDimension.Height + " " + prod.UnitDimension.Uom;
                        }
                        var cc = ((IDictionary<String, object>)prod);
                        if (((IDictionary<String, object>)prod).ContainsKey("UnitVolume"))
                        {
                            product.UnitVolume = prod.UnitVolume.ToString();
                        }
                        if (((IDictionary<String, object>)prod).ContainsKey("UnitWeight"))
                        {
                            product.UnitWeight = prod.UnitWeight.GrossWeight + " " + prod.UnitWeight.Uom;
                        }
                        if (((IDictionary<String, object>)prod).ContainsKey("UnitRate"))
                        {
                            product.UnitRate = prod.UnitRate.ToString();
                        }
                        if (((IDictionary<String, object>)prod).ContainsKey("OrderDetails"))
                        {
                            product.OrderDetails = prod.OrderDetails.SKULineNo;
                            product.SKULineNo = prod.OrderDetails.SKULineNo;
                        }
                    }
                    catch (Exception)
                    {
                    }
                    
                    products.Add(product);
                }

                po.products = products;

                asndata = JsonConvert.SerializeObject(po);

                var bookingRequestContent = new StringContent(asndata, Encoding.UTF8, "application/json");
                _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", null);
                var dwhResponse = await _httpClient.PostAsync($"{uri.Value}/api/PurchaseOrder/{processType}", bookingRequestContent);
                var responseContent = await dwhResponse.Content.ReadAsStringAsync();

                return Ok(new { message = "Saved successfully" });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }


        //[HttpPost]
        //public async Task<IActionResult> ReceiveOrder()
        //{
        //    try
        //    {
        //        var uri = _configuration.GetSection("DWH_URI");
        //        var formCollection = await Request.ReadFormAsync();
        //        var file = formCollection.Files.First();
        //        if (file.ContentType != "text/xml" && file.ContentType != "application/json")
        //        {
        //            return StatusCode(StatusCodes.Status500InternalServerError, "File is not a valid type");
        //        }
        //        var asn = new StringBuilder();
        //        using (var reader = new StreamReader(file.OpenReadStream()))
        //        {
        //            while (reader.Peek() >= 0)
        //                asn.AppendLine(reader.ReadLine());
        //        }

        //        XDocument doc = XDocument.Parse(asn.ToString()); //or XDocument.Load(path)
        //        string jsonText = JsonConvert.SerializeXNode(doc);
        //        dynamic dyn = JsonConvert.DeserializeObject<ExpandoObject>(jsonText);

        //        string asndata;
        //        var booking = dyn.Message.Bookings.Booking;

        //        //Booking booking = (Booking)serial.Deserialize(reader);
        //        PurchaseOrder po = new PurchaseOrder();
        //        List<Product> products = new List<Product>();
        //        po.Id = Guid.NewGuid();
        //        po.CreateDate = DateTime.Now;
        //        po.uuid = Guid.NewGuid();
        //        if (booking.GetType().GetProperty("BasicDetails") != null)
        //        {
        //            po.BookingNo = booking.BasicDetails.BookingNo;
        //            po.BookingDate = DateTime.ParseExact(booking.BasicDetails.BookingDate.ToString(), "yyyyMMdd", CultureInfo.InvariantCulture);
        //            if (booking.BasicDetails.GetType().GetProperty("Movement") != null)
        //            {
        //                po.PlaceOfReceipt = booking.BasicDetails.Movement.PlaceOfReceipt.Code;
        //                po.PlaceOfDelivery = booking.BasicDetails.Movement.PlaceOfDelivery.Code;
        //            }
        //        }
        //        po.AsnFile = asn.ToString();
        //        if (booking.GetType().GetProperty("Services") != null)
        //        {
        //            po.ProcessType = booking.Services[0].ProcessType;
        //        }
        //        po.DeliveryStatus = 0;
        //        po.SubmitStatus = "Available";

        //        foreach (var prod in booking.Products)
        //        {
        //            Product product = new Product();
        //            product.Id = Guid.NewGuid();
        //            product.CreateDate = DateTime.Now;
        //            product.uuid = Guid.NewGuid();
        //            product.PoUuid = po.uuid;
        //            product.LineItemId = "";
        //            if (prod.GetType().GetProperty("ProductCode") != null)
        //            {
        //                product.ProductCode = prod.ProductCode.ToString();
        //            }
        //            if (prod.GetType().GetProperty("Quantity") != null && prod.GetType().GetProperty("Quantity") != null)
        //            {
        //                product.Quantity = prod.Quantity.Value + " " + prod.Quantity.Uom;
        //            }
        //            if (prod.GetType().GetProperty("UnitDimension") != null)
        //            {
        //                product.UnitDimension = prod.UnitDimension.Length + "*" + prod.UnitDimension.Width + "*" +
        //                prod.UnitDimension.Height + " " + prod.UnitDimension.Uom;
        //            }
        //            if (prod.GetType().GetProperty("UnitVolume") != null)
        //            {
        //                product.UnitVolume = prod.UnitVolume.ToString();
        //            }
        //            if (prod.GetType().GetProperty("UnitWeight") != null)
        //            {
        //                product.UnitWeight = prod.UnitWeight.GrossWeight + " " + prod.UnitWeight.Uom;
        //            }
        //            if (prod.GetType().GetProperty("UnitRate") != null)
        //            {
        //                product.UnitRate = prod.UnitRate.ToString();
        //            }
        //            if (prod.GetType().GetProperty("OrderDetails") != null)
        //            {
        //                product.OrderDetails = prod.OrderDetails.SKULineNo;
        //                product.SKULineNo = prod.OrderDetails.SKULineNo;
        //            }
        //            products.Add(product);
        //        }

        //        po.products = products;

        //        asndata = JsonConvert.SerializeObject(po);

        //        //XmlDocument xmlDoc = new XmlDocument();
        //        //xmlDoc.LoadXml(asn.ToString());

        //        //XmlNode xmlNode = xmlDoc.SelectSingleNode("//Booking");
        //        //string asndata;

        //        //XmlSerializer serial = new XmlSerializer(typeof(Booking));

        //        //using (XmlNodeReader reader = new XmlNodeReader(xmlNode))
        //        //{
        //        //    Booking booking = (Booking)serial.Deserialize(reader);
        //        //    PurchaseOrder po = new PurchaseOrder();
        //        //    List<Product> products = new List<Product>();
        //        //    po.Id = Guid.NewGuid();
        //        //    po.CreateDate = DateTime.Now;
        //        //    po.uuid = Guid.NewGuid();
        //        //    po.BookingNo = booking.BasicDetails.BookingNo;
        //        //    po.BookingDate = DateTime.ParseExact(booking.BasicDetails.BookingDate.ToString(), "yyyyMMdd", CultureInfo.InvariantCulture);
        //        //    po.AsnFile = asn.ToString();
        //        //    po.ProcessType = booking.Services[0].ProcessType;
        //        //    po.PlaceOfReceipt = booking.BasicDetails.Movement.PlaceOfReceipt.Code;
        //        //    po.PlaceOfDelivery = booking.BasicDetails.Movement.PlaceOfDelivery.Code;
        //        //    po.DeliveryStatus = 0;
        //        //    po.SubmitStatus = "Available";

        //        //    foreach (var prod in booking.Products)
        //        //    {
        //        //        Product product = new Product();
        //        //        product.Id = Guid.NewGuid();
        //        //        product.CreateDate = DateTime.Now;
        //        //        product.uuid = Guid.NewGuid();
        //        //        product.PoUuid = po.uuid;
        //        //        product.LineItemId = "";
        //        //        product.ProductCode = prod.ProductCode.ToString();
        //        //        product.Quantity = prod.Quantity.Value + " " + prod.Quantity.Uom;
        //        //        product.UnitDimension = prod.UnitDimension.Length + "*" + prod.UnitDimension.Width + "*" +
        //        //            prod.UnitDimension.Height + " " + prod.UnitDimension.Uom;
        //        //        product.UnitVolume = prod.UnitVolume.ToString();
        //        //        product.UnitWeight = prod.UnitWeight.GrossWeight + " " + prod.UnitWeight.Uom;
        //        //        product.UnitRate = prod.UnitRate.ToString();
        //        //        product.OrderDetails = prod.OrderDetails.SKULineNo;
        //        //        product.SKULineNo = prod.OrderDetails.SKULineNo;
        //        //        products.Add(product);
        //        //    }

        //        //    po.products = products;

        //        //    asndata = JsonConvert.SerializeObject(po);
        //        //}

        //        var bookingRequestContent = new StringContent(asndata, Encoding.UTF8, "application/json");
        //        _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", null);
        //        var dwhResponse = await _httpClient.PostAsync($"{uri.Value}/api/PurchaseOrder", bookingRequestContent);
        //        var responseContent = await dwhResponse.Content.ReadAsStringAsync();

        //        return Ok(new { message = "Saved successfully" });
        //    }
        //    catch (Exception e)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
        //    }
        //}
    }
}
