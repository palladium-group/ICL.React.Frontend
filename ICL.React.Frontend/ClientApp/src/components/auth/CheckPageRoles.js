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
  return menues.map(m => (m.page==protectedMenues[0]&&m.header==protectedMenues[1]&&m.display==protectedMenues[2] ? { ...m, visible: false } : m));
};

const permissionsTree = {
  "USAID.User": protect(
    ["/plan", "Order Intake", "Orders Validated (current)"],
    ["/plan", "Planning Inputs", "Third Party Data Feeds"], ["/plan", "Planning Inputs", "PSA Inbound Product Monitoring"],
    ["/plan", "Monthly Operational Plans", "Supply"], ["/plan", "Monthly Operational Plans", "Demand"]),
  "Palladium.User": protect(["/plan", "Planning Inputs", "Customs Requirements"], ["/plan", "Planning Inputs", "Quarterly Supply Plans"]),
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
