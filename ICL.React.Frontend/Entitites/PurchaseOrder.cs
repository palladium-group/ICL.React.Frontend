namespace ICL.React.Frontend.Entitites
{
    public class PurchaseOrder
    {
        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid uuid { get; set; }
        public string? BookingNo { get; set; }
        public DateTime BookingDate { get; set; }
        public Guid? SCMID { get; set; }
        public string? AsnFile { get; set; }
        public int? DeliveryStatus { get; set; }
        public string? ErrorMessage { get; set; }
        public string? ProcessType { get; set; }
        public string? PlaceOfReceipt { get; set; }
        public string? PlaceOfDelivery { get; set; }
        public string? SubmitStatus { get; set; }
        public string? TransportationMode { get; set; }
        public List<Product>? products { get; set; }
    }
}
