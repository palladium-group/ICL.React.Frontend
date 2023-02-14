const protocol = window.location.protocol;
const hostname = window.location.hostname;
// const path = protocol + "//" + hostname;
const path = "https://" + hostname;

export const apiRoutes = {
  purchaseOrder: `${process.env.REACT_APP_DWH_BACKEND}/api/PurchaseOrder`,
  customerOrder:`${process.env.REACT_APP_DWH_BACKEND}/api/PurchaseOrder/outbound`,
  user:`${process.env.REACT_APP_DWH_BACKEND}/api/User`,
  role:`${process.env.REACT_APP_DWH_BACKEND}/api/Role`,
  cmscontentimpact:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentImpact`,
  cmscontentleadership:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentLeadership`,
  cmscontentroles:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentRoles`,
  cmscontentrolesbyid:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentRoles/rolesByid`,
  cmscontentimpactbyrol:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentImpact/contentByRol`,
  cmscontentleadershipbyrol:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentLeadership/contentByRol`,
  cmscontentimpactbyname:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentImpact/contentByName`,
  cmscontentleadershipbyname:`${process.env.REACT_APP_DWH_BACKEND}/api/CMSContentLeadership/contentByName`,
};
