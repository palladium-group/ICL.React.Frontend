import React from "react";
import { useMsal } from "@azure/msal-react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

const menues = [
  {
    page: "/plan",
    header: "Planning Inputs",
    display: "Quantification Reports",
    href: "https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118385665/Quantification+Reports",
    visible: true
  },
  {
    page: "/plan",
    header: "Planning Inputs",
    display: "Quarterly Supply Plans",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Planning Inputs",
    display: "Historical Distribution Orders",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Planning Inputs",
    display: "PSA Inbound Product Monitoring",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Planning Inputs",
    display: "Custom Clearance Monitoring",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Planning Inputs",
    display: "Customs Requirements",
    href: "https://thepalladiumgroup.atlassian.net/servicedesk/customer/portal/26/group/70/create/272",
    visible: true
  },
  {
    page: "/plan",
    header: "Order Intake",
    display: "Orders Received (current)",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Order Intake",
    display: "Orders Validated (current)",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Operational Planning",
    display: "Distribution Planning",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Operational Planning",
    display: "Reconciliation & Allocation",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Operational Planning",
    display: "Cost Estimating",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Operational Planning",
    display: "Rolling 12-month master plan",
    href: "",
    visible: true
  }
];

const protect = (protectedMenues) => {
  const preventAccess = m =>( protectedMenues.filter(x => x.page === m.page && x.header === m.header && x.display === m.display).length>0);
  return menues.map(m => (preventAccess(m) ? { ...m, visible: false } : m));
};

/*
const permissionsTree = {
  "Washington.User": protect([]),
  "Country.User": protect([]),
   "HQ.User": protect([])
};
*/

const permissionsTree = {
    "Washington.User": protect([]),
    "Country.User": protect([]),
    "HQ.User": protect([])
};


function CheckPageRole(page,header,title) {
  //1. get the roles of the user
  const { instance, accounts, inProgress } = useMsal();
  const user = accounts.length > 0 && accounts[0];
  if (!user["idTokenClaims"])
    return false;
  if (!user["idTokenClaims"]["roles"] || user["idTokenClaims"]["roles"].length <= 0)
    return false;
  const roles = user["idTokenClaims"]["roles"];
  console.log(roles);

  //2. check each rol for permission
  for (const userRol of roles) {
    const permissions = permissionsTree[userRol];
    console.log(permissions);

    if (permissions && permissions.length > 0) {
      for (const pageItem in permissions) {
        if (
          (page == permissions[pageItem].page) &&
          (header == permissions[pageItem].header) &&
          (title == permissions[pageItem].display))
          return permissions[pageItem].visible;
      }
    }
  }
  return false;
}

export default CheckPageRole;
