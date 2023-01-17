namespace ICL.React.Frontend.Entitites
{

    // NOTE: Generated code may require at least .NET Framework 4.5 or .NET Core/Standard 2.0.
    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class Booking
    {

        private string actionField;

        private BookingBasicDetails basicDetailsField;

        private BookingParty[] partiesField;

        private BookingCommercialInvoices commercialInvoicesField;

        private BookingProduct[] productsField;

        private BookingService[] servicesField;

        /// <remarks/>
        public string Action
        {
            get
            {
                return this.actionField;
            }
            set
            {
                this.actionField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetails BasicDetails
        {
            get
            {
                return this.basicDetailsField;
            }
            set
            {
                this.basicDetailsField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("Party", IsNullable = false)]
        public BookingParty[] Parties
        {
            get
            {
                return this.partiesField;
            }
            set
            {
                this.partiesField = value;
            }
        }

        /// <remarks/>
        public BookingCommercialInvoices CommercialInvoices
        {
            get
            {
                return this.commercialInvoicesField;
            }
            set
            {
                this.commercialInvoicesField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("Product", IsNullable = false)]
        public BookingProduct[] Products
        {
            get
            {
                return this.productsField;
            }
            set
            {
                this.productsField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("Service", IsNullable = false)]
        public BookingService[] Services
        {
            get
            {
                return this.servicesField;
            }
            set
            {
                this.servicesField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetails
    {

        private string bookingTypeField;

        private string bookingNoField;

        private uint bookingDateField;

        private BookingBasicDetailsServiceClass serviceClassField;

        private BookingBasicDetailsClient clientField;

        private BookingBasicDetailsShipper shipperField;

        private BookingBasicDetailsConsignee consigneeField;

        private string consigneeReferenceNoField;

        private BookingBasicDetailsAccountManagement accountManagementField;

        private BookingBasicDetailsMovement movementField;

        private BookingBasicDetailsPackageSummary packageSummaryField;

        private BookingBasicDetailsSystemInformation systemInformationField;

        private string serviceTemplateNameField;

        /// <remarks/>
        public string BookingType
        {
            get
            {
                return this.bookingTypeField;
            }
            set
            {
                this.bookingTypeField = value;
            }
        }

        /// <remarks/>
        public string BookingNo
        {
            get
            {
                return this.bookingNoField;
            }
            set
            {
                this.bookingNoField = value;
            }
        }

        /// <remarks/>
        public uint BookingDate
        {
            get
            {
                return this.bookingDateField;
            }
            set
            {
                this.bookingDateField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsServiceClass ServiceClass
        {
            get
            {
                return this.serviceClassField;
            }
            set
            {
                this.serviceClassField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsClient Client
        {
            get
            {
                return this.clientField;
            }
            set
            {
                this.clientField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsShipper Shipper
        {
            get
            {
                return this.shipperField;
            }
            set
            {
                this.shipperField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsConsignee Consignee
        {
            get
            {
                return this.consigneeField;
            }
            set
            {
                this.consigneeField = value;
            }
        }

        /// <remarks/>
        public string ConsigneeReferenceNo
        {
            get
            {
                return this.consigneeReferenceNoField;
            }
            set
            {
                this.consigneeReferenceNoField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsAccountManagement AccountManagement
        {
            get
            {
                return this.accountManagementField;
            }
            set
            {
                this.accountManagementField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsMovement Movement
        {
            get
            {
                return this.movementField;
            }
            set
            {
                this.movementField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsPackageSummary PackageSummary
        {
            get
            {
                return this.packageSummaryField;
            }
            set
            {
                this.packageSummaryField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsSystemInformation SystemInformation
        {
            get
            {
                return this.systemInformationField;
            }
            set
            {
                this.systemInformationField = value;
            }
        }

        /// <remarks/>
        public string ServiceTemplateName
        {
            get
            {
                return this.serviceTemplateNameField;
            }
            set
            {
                this.serviceTemplateNameField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsServiceClass
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsClient
    {

        private ushort codeField;

        /// <remarks/>
        public ushort Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsShipper
    {

        private ushort codeField;

        /// <remarks/>
        public ushort Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsConsignee
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsAccountManagement
    {

        private object salesPICField;

        private object customerServicePICField;

        /// <remarks/>
        public object SalesPIC
        {
            get
            {
                return this.salesPICField;
            }
            set
            {
                this.salesPICField = value;
            }
        }

        /// <remarks/>
        public object CustomerServicePIC
        {
            get
            {
                return this.customerServicePICField;
            }
            set
            {
                this.customerServicePICField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsMovement
    {

        private string movementTypeField;

        private string shipmentModeField;

        private BookingBasicDetailsMovementPlaceOfReceipt placeOfReceiptField;

        private BookingBasicDetailsMovementPlaceOfDelivery placeOfDeliveryField;

        private BookingBasicDetailsMovementRequestedShipmentDate requestedShipmentDateField;

        private BookingBasicDetailsMovementRequestedArrivalDate requestedArrivalDateField;

        private string transportationModeField;

        private string shipmentTypeField;

        /// <remarks/>
        public string MovementType
        {
            get
            {
                return this.movementTypeField;
            }
            set
            {
                this.movementTypeField = value;
            }
        }

        /// <remarks/>
        public string ShipmentMode
        {
            get
            {
                return this.shipmentModeField;
            }
            set
            {
                this.shipmentModeField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsMovementPlaceOfReceipt PlaceOfReceipt
        {
            get
            {
                return this.placeOfReceiptField;
            }
            set
            {
                this.placeOfReceiptField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsMovementPlaceOfDelivery PlaceOfDelivery
        {
            get
            {
                return this.placeOfDeliveryField;
            }
            set
            {
                this.placeOfDeliveryField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsMovementRequestedShipmentDate RequestedShipmentDate
        {
            get
            {
                return this.requestedShipmentDateField;
            }
            set
            {
                this.requestedShipmentDateField = value;
            }
        }

        /// <remarks/>
        public BookingBasicDetailsMovementRequestedArrivalDate RequestedArrivalDate
        {
            get
            {
                return this.requestedArrivalDateField;
            }
            set
            {
                this.requestedArrivalDateField = value;
            }
        }

        /// <remarks/>
        public string TransportationMode
        {
            get
            {
                return this.transportationModeField;
            }
            set
            {
                this.transportationModeField = value;
            }
        }

        /// <remarks/>
        public string ShipmentType
        {
            get
            {
                return this.shipmentTypeField;
            }
            set
            {
                this.shipmentTypeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsMovementPlaceOfReceipt
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsMovementPlaceOfDelivery
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsMovementRequestedShipmentDate
    {

        private uint dateField;

        private byte timeField;

        private string timeZoneField;

        /// <remarks/>
        public uint Date
        {
            get
            {
                return this.dateField;
            }
            set
            {
                this.dateField = value;
            }
        }

        /// <remarks/>
        public byte Time
        {
            get
            {
                return this.timeField;
            }
            set
            {
                this.timeField = value;
            }
        }

        /// <remarks/>
        public string TimeZone
        {
            get
            {
                return this.timeZoneField;
            }
            set
            {
                this.timeZoneField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsMovementRequestedArrivalDate
    {

        private uint dateField;

        private byte timeField;

        private string timeZoneField;

        /// <remarks/>
        public uint Date
        {
            get
            {
                return this.dateField;
            }
            set
            {
                this.dateField = value;
            }
        }

        /// <remarks/>
        public byte Time
        {
            get
            {
                return this.timeField;
            }
            set
            {
                this.timeField = value;
            }
        }

        /// <remarks/>
        public string TimeZone
        {
            get
            {
                return this.timeZoneField;
            }
            set
            {
                this.timeZoneField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsPackageSummary
    {

        private object totalPackagesField;

        private object weightField;

        /// <remarks/>
        public object TotalPackages
        {
            get
            {
                return this.totalPackagesField;
            }
            set
            {
                this.totalPackagesField = value;
            }
        }

        /// <remarks/>
        public object Weight
        {
            get
            {
                return this.weightField;
            }
            set
            {
                this.weightField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsSystemInformation
    {

        private BookingBasicDetailsSystemInformationBookingOffice bookingOfficeField;

        private string sourceField;

        /// <remarks/>
        public BookingBasicDetailsSystemInformationBookingOffice BookingOffice
        {
            get
            {
                return this.bookingOfficeField;
            }
            set
            {
                this.bookingOfficeField = value;
            }
        }

        /// <remarks/>
        public string Source
        {
            get
            {
                return this.sourceField;
            }
            set
            {
                this.sourceField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingBasicDetailsSystemInformationBookingOffice
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingParty
    {

        private BookingPartyPartyName partyNameField;

        private string partyTypeField;

        private BookingPartyAddressInformation addressInformationField;

        /// <remarks/>
        public BookingPartyPartyName PartyName
        {
            get
            {
                return this.partyNameField;
            }
            set
            {
                this.partyNameField = value;
            }
        }

        /// <remarks/>
        public string PartyType
        {
            get
            {
                return this.partyTypeField;
            }
            set
            {
                this.partyTypeField = value;
            }
        }

        /// <remarks/>
        public BookingPartyAddressInformation AddressInformation
        {
            get
            {
                return this.addressInformationField;
            }
            set
            {
                this.addressInformationField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingPartyPartyName
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingPartyAddressInformation
    {

        private object countryField;

        /// <remarks/>
        public object Country
        {
            get
            {
                return this.countryField;
            }
            set
            {
                this.countryField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingCommercialInvoices
    {

        private BookingCommercialInvoicesCommercialInvoice commercialInvoiceField;

        /// <remarks/>
        public BookingCommercialInvoicesCommercialInvoice CommercialInvoice
        {
            get
            {
                return this.commercialInvoiceField;
            }
            set
            {
                this.commercialInvoiceField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingCommercialInvoicesCommercialInvoice
    {

        private string invoiceNoField;

        private uint invoiceDateField;

        private BookingCommercialInvoicesCommercialInvoiceAmount amountField;

        /// <remarks/>
        public string InvoiceNo
        {
            get
            {
                return this.invoiceNoField;
            }
            set
            {
                this.invoiceNoField = value;
            }
        }

        /// <remarks/>
        public uint InvoiceDate
        {
            get
            {
                return this.invoiceDateField;
            }
            set
            {
                this.invoiceDateField = value;
            }
        }

        /// <remarks/>
        public BookingCommercialInvoicesCommercialInvoiceAmount Amount
        {
            get
            {
                return this.amountField;
            }
            set
            {
                this.amountField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingCommercialInvoicesCommercialInvoiceAmount
    {

        private uint valueField;

        private string currencyField;

        /// <remarks/>
        public uint Value
        {
            get
            {
                return this.valueField;
            }
            set
            {
                this.valueField = value;
            }
        }

        /// <remarks/>
        public string Currency
        {
            get
            {
                return this.currencyField;
            }
            set
            {
                this.currencyField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingProduct
    {

        private string actionField;

        private string productCodeField;

        private BookingProductQuantity quantityField;

        private BookingProductUnitDimension unitDimensionField;

        private object unitVolumeField;

        private BookingProductUnitWeight unitWeightField;

        private object unitRateField;

        private BookingProductOrderDetails orderDetailsField;

        /// <remarks/>
        public string Action
        {
            get
            {
                return this.actionField;
            }
            set
            {
                this.actionField = value;
            }
        }

        /// <remarks/>
        public string ProductCode
        {
            get
            {
                return this.productCodeField;
            }
            set
            {
                this.productCodeField = value;
            }
        }

        /// <remarks/>
        public BookingProductQuantity Quantity
        {
            get
            {
                return this.quantityField;
            }
            set
            {
                this.quantityField = value;
            }
        }

        /// <remarks/>
        public BookingProductUnitDimension UnitDimension
        {
            get
            {
                return this.unitDimensionField;
            }
            set
            {
                this.unitDimensionField = value;
            }
        }

        /// <remarks/>
        public object UnitVolume
        {
            get
            {
                return this.unitVolumeField;
            }
            set
            {
                this.unitVolumeField = value;
            }
        }

        /// <remarks/>
        public BookingProductUnitWeight UnitWeight
        {
            get
            {
                return this.unitWeightField;
            }
            set
            {
                this.unitWeightField = value;
            }
        }

        /// <remarks/>
        public object UnitRate
        {
            get
            {
                return this.unitRateField;
            }
            set
            {
                this.unitRateField = value;
            }
        }

        /// <remarks/>
        public BookingProductOrderDetails OrderDetails
        {
            get
            {
                return this.orderDetailsField;
            }
            set
            {
                this.orderDetailsField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingProductQuantity
    {

        private ushort valueField;

        private string uomField;

        /// <remarks/>
        public ushort Value
        {
            get
            {
                return this.valueField;
            }
            set
            {
                this.valueField = value;
            }
        }

        /// <remarks/>
        public string Uom
        {
            get
            {
                return this.uomField;
            }
            set
            {
                this.uomField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingProductUnitDimension
    {

        private byte lengthField;

        private byte widthField;

        private byte heightField;

        private string uomField;

        /// <remarks/>
        public byte Length
        {
            get
            {
                return this.lengthField;
            }
            set
            {
                this.lengthField = value;
            }
        }

        /// <remarks/>
        public byte Width
        {
            get
            {
                return this.widthField;
            }
            set
            {
                this.widthField = value;
            }
        }

        /// <remarks/>
        public byte Height
        {
            get
            {
                return this.heightField;
            }
            set
            {
                this.heightField = value;
            }
        }

        /// <remarks/>
        public string Uom
        {
            get
            {
                return this.uomField;
            }
            set
            {
                this.uomField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingProductUnitWeight
    {

        private byte netWeightField;

        private byte grossWeightField;

        private string uomField;

        /// <remarks/>
        public byte NetWeight
        {
            get
            {
                return this.netWeightField;
            }
            set
            {
                this.netWeightField = value;
            }
        }

        /// <remarks/>
        public byte GrossWeight
        {
            get
            {
                return this.grossWeightField;
            }
            set
            {
                this.grossWeightField = value;
            }
        }

        /// <remarks/>
        public string Uom
        {
            get
            {
                return this.uomField;
            }
            set
            {
                this.uomField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingProductOrderDetails
    {

        private object countryOfManufacturingField;

        private string sKULineNoField;

        /// <remarks/>
        public object CountryOfManufacturing
        {
            get
            {
                return this.countryOfManufacturingField;
            }
            set
            {
                this.countryOfManufacturingField = value;
            }
        }

        /// <remarks/>
        public string SKULineNo
        {
            get
            {
                return this.sKULineNoField;
            }
            set
            {
                this.sKULineNoField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingService
    {

        private string serviceTypeField;

        private string processTypeField;

        private byte serviceSequenceNoField;

        private BookingServicePlaceOfReceipt placeOfReceiptField;

        private BookingServicePlaceOfDelivery placeOfDeliveryField;

        private BookingServicePortOfLoading portOfLoadingField;

        private BookingServicePortOfDischarge portOfDischargeField;

        private BookingServiceETD eTDField;

        private BookingServiceETA eTAField;

        private object serviceClassField;

        private BookingServiceOwnerOfficeorSite ownerOfficeorSiteField;

        private BookingServiceExecutingOfficeorSite executingOfficeorSiteField;

        private BookingServiceSea seaField;

        private BookingServiceAir airField;

        private BookingServiceRoad roadField;

        private object warehouseField;

        private object carrierField;

        private string actionField;

        /// <remarks/>
        public string ServiceType
        {
            get
            {
                return this.serviceTypeField;
            }
            set
            {
                this.serviceTypeField = value;
            }
        }

        /// <remarks/>
        public string ProcessType
        {
            get
            {
                return this.processTypeField;
            }
            set
            {
                this.processTypeField = value;
            }
        }

        /// <remarks/>
        public byte ServiceSequenceNo
        {
            get
            {
                return this.serviceSequenceNoField;
            }
            set
            {
                this.serviceSequenceNoField = value;
            }
        }

        /// <remarks/>
        public BookingServicePlaceOfReceipt PlaceOfReceipt
        {
            get
            {
                return this.placeOfReceiptField;
            }
            set
            {
                this.placeOfReceiptField = value;
            }
        }

        /// <remarks/>
        public BookingServicePlaceOfDelivery PlaceOfDelivery
        {
            get
            {
                return this.placeOfDeliveryField;
            }
            set
            {
                this.placeOfDeliveryField = value;
            }
        }

        /// <remarks/>
        public BookingServicePortOfLoading PortOfLoading
        {
            get
            {
                return this.portOfLoadingField;
            }
            set
            {
                this.portOfLoadingField = value;
            }
        }

        /// <remarks/>
        public BookingServicePortOfDischarge PortOfDischarge
        {
            get
            {
                return this.portOfDischargeField;
            }
            set
            {
                this.portOfDischargeField = value;
            }
        }

        /// <remarks/>
        public BookingServiceETD ETD
        {
            get
            {
                return this.eTDField;
            }
            set
            {
                this.eTDField = value;
            }
        }

        /// <remarks/>
        public BookingServiceETA ETA
        {
            get
            {
                return this.eTAField;
            }
            set
            {
                this.eTAField = value;
            }
        }

        /// <remarks/>
        public object ServiceClass
        {
            get
            {
                return this.serviceClassField;
            }
            set
            {
                this.serviceClassField = value;
            }
        }

        /// <remarks/>
        public BookingServiceOwnerOfficeorSite OwnerOfficeorSite
        {
            get
            {
                return this.ownerOfficeorSiteField;
            }
            set
            {
                this.ownerOfficeorSiteField = value;
            }
        }

        /// <remarks/>
        public BookingServiceExecutingOfficeorSite ExecutingOfficeorSite
        {
            get
            {
                return this.executingOfficeorSiteField;
            }
            set
            {
                this.executingOfficeorSiteField = value;
            }
        }

        /// <remarks/>
        public BookingServiceSea Sea
        {
            get
            {
                return this.seaField;
            }
            set
            {
                this.seaField = value;
            }
        }

        /// <remarks/>
        public BookingServiceAir Air
        {
            get
            {
                return this.airField;
            }
            set
            {
                this.airField = value;
            }
        }

        /// <remarks/>
        public BookingServiceRoad Road
        {
            get
            {
                return this.roadField;
            }
            set
            {
                this.roadField = value;
            }
        }

        /// <remarks/>
        public object Warehouse
        {
            get
            {
                return this.warehouseField;
            }
            set
            {
                this.warehouseField = value;
            }
        }

        /// <remarks/>
        public object Carrier
        {
            get
            {
                return this.carrierField;
            }
            set
            {
                this.carrierField = value;
            }
        }

        /// <remarks/>
        public string Action
        {
            get
            {
                return this.actionField;
            }
            set
            {
                this.actionField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServicePlaceOfReceipt
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServicePlaceOfDelivery
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServicePortOfLoading
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServicePortOfDischarge
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServiceETD
    {

        private uint dateField;

        private byte timeField;

        private string timeZoneField;

        /// <remarks/>
        public uint Date
        {
            get
            {
                return this.dateField;
            }
            set
            {
                this.dateField = value;
            }
        }

        /// <remarks/>
        public byte Time
        {
            get
            {
                return this.timeField;
            }
            set
            {
                this.timeField = value;
            }
        }

        /// <remarks/>
        public string TimeZone
        {
            get
            {
                return this.timeZoneField;
            }
            set
            {
                this.timeZoneField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServiceETA
    {

        private uint dateField;

        private byte timeField;

        private string timeZoneField;

        /// <remarks/>
        public uint Date
        {
            get
            {
                return this.dateField;
            }
            set
            {
                this.dateField = value;
            }
        }

        /// <remarks/>
        public byte Time
        {
            get
            {
                return this.timeField;
            }
            set
            {
                this.timeField = value;
            }
        }

        /// <remarks/>
        public string TimeZone
        {
            get
            {
                return this.timeZoneField;
            }
            set
            {
                this.timeZoneField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServiceOwnerOfficeorSite
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServiceExecutingOfficeorSite
    {

        private string codeField;

        /// <remarks/>
        public string Code
        {
            get
            {
                return this.codeField;
            }
            set
            {
                this.codeField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServiceSea
    {

        private object voyageDateField;

        /// <remarks/>
        public object VoyageDate
        {
            get
            {
                return this.voyageDateField;
            }
            set
            {
                this.voyageDateField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServiceAir
    {

        private object flightDateField;

        /// <remarks/>
        public object FlightDate
        {
            get
            {
                return this.flightDateField;
            }
            set
            {
                this.flightDateField = value;
            }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class BookingServiceRoad
    {

        private object pickupWindowFromDateField;

        private object pickupWindowToDateField;

        private object deliveryWindowFromDateField;

        private object deliveryWindowToDateField;

        /// <remarks/>
        public object PickupWindowFromDate
        {
            get
            {
                return this.pickupWindowFromDateField;
            }
            set
            {
                this.pickupWindowFromDateField = value;
            }
        }

        /// <remarks/>
        public object PickupWindowToDate
        {
            get
            {
                return this.pickupWindowToDateField;
            }
            set
            {
                this.pickupWindowToDateField = value;
            }
        }

        /// <remarks/>
        public object DeliveryWindowFromDate
        {
            get
            {
                return this.deliveryWindowFromDateField;
            }
            set
            {
                this.deliveryWindowFromDateField = value;
            }
        }

        /// <remarks/>
        public object DeliveryWindowToDate
        {
            get
            {
                return this.deliveryWindowToDateField;
            }
            set
            {
                this.deliveryWindowToDateField = value;
            }
        }
    }


}
