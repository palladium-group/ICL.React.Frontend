const protocol = window.location.protocol;
const hostname = window.location.hostname;
// const path = protocol + "//" + hostname;
const path = "https://" + hostname;

export const apiRoutes = {
  purchaseOrder: `${process.env.REACT_APP_DWH_BACKEND}/api/PurchaseOrder`,
  customerOrder:`${process.env.REACT_APP_DWH_BACKEND}/api/PurchaseOrder/outbound`
};
