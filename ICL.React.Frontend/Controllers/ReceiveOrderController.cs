using Azure.Messaging.ServiceBus;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace ICL.React.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReceiveOrderController : ControllerBase
    {
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

                ServiceBusClient client = new ServiceBusClient("Endpoint=sb://ghscicldemo.servicebus.windows.net/;SharedAccessKeyName=send_bookings;SharedAccessKey=MvxGIHGYljXCC5ZyyOXap2LN7u4On3WNdBn33Ixm1BM=");
                ServiceBusSender sender = client.CreateSender("booking-demo");

                using (ServiceBusMessageBatch message = await sender.CreateMessageBatchAsync())
                {
                    message.TryAddMessage(new ServiceBusMessage(asn.ToString()));
                    try
                    {
                        await sender.SendMessagesAsync(message);
                    }
                    finally
                    {
                        await sender.DisposeAsync();
                        await client.DisposeAsync();
                    }
                }

                return Ok(new { message = "Successfully sent ASN" });
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, e.Message);
            }
        }
    }
}
