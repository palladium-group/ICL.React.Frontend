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
    display: "Orders Fulfilled (historical)",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Planning Inputs",
    display: "Third Party Data Feeds",
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
    display: "Customs Requirements",
    href: "",
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
    header: "Monthly Operational Plans",
    display: "Supply",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Monthly Operational Plans",
    display: "Demand",
    href: "",
    visible: true
  },
  {
    page: "/plan",
    header: "Monthly Operational Plans",
    display: "Rolling 12-month master plan",
    href: "",
    visible: true
  }
];

const protect = (protectedMenues) => {
  const preventAccess = m =>( protectedMenues.filter(x => x.page === m.page && x.header === m.header && x.display === m.display).length>0);
  return menues.map(m => (preventAccess(m) ? { ...m, visible: false } : m));
};

const permissionsTree = {
  "USAID.User": protect([
    { page: "/plan", header: "Order Intake", display: "Orders Validated (current)" },
    { page: "/plan", header: "Planning Inputs", display: "Third Party Data Feeds" },
    { page: "/plan", header: "Planning Inputs", display: "PSA Inbound Product Monitoring" },
    { page: "/plan", header: "Monthly Operational Plans", display: "Supply" },
    { page: "/plan", header: "Monthly Operational Plans", display: "Demand" }
  ]),
  "Palladium.User": protect([
      { page: "/plan", header: "Planning Inputs", display: "Customs Requirements" },
      { page: "/plan", header: "Planning Inputs", display: "Quarterly Supply Plans" },
      { page: "/plan", header: "Monthly Operational Plans", display: "Rolling 12-month master plan" }
    ]
  ),
   "Super.User": protect([])
};

function CheckPageRole(page,header,title) {
  //1. get the roles of the user
  const { instance, accounts, inProgress } = useMsal();
  const user = accounts.length > 0 && accounts[0];
  if (!user["idTokenClaims"])
    return false;
  if (!user["idTokenClaims"]["roles"] || user["idTokenClaims"]["roles"].length <= 0)
    return false;
  var roles = user["idTokenClaims"]["roles"];

  //2. check each rol for permission
  for (const userRol of roles) {
    var permissions = permissionsTree[userRol];

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
