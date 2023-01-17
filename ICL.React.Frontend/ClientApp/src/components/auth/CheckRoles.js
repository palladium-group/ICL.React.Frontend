import React from "react";
import { useMsal } from "@azure/msal-react";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

const menues =
  [
    {
      href: "/manage",
      title: "Manage",
      visible: true
    },
    {
      href: "/plan",
      title: "Plan",
      visible: true
    },
    {
      title: "Source",
      href: "/source",
      visible: true
    },
    {
      href: "/store",
      title: "Store",
      visible: true
    },
    {
      title: "Deliver",
      href: "/deliver",
      visible: true
    },
    {
      title: "Enable",
      href: "/enable",
      visible: true
    },
    {
      title: "MIS Administration",
      href: "/MISAdministration",
      visible: true
    },
  ];

const protect = (protectedMenues) => {
  return  menues.map(m => (protectedMenues.includes(m.href) ? { ...m, visible: false } : m))
};

const permissionsTree = {
    "USAID.User": protect(["/MISAdministration"]),
    "Palladium.User": protect(["/MISAdministration"]),
    "Super.User": protect([]),
};

function CheckRol(href, title) {
    //1. get the roles of the user
    const { instance, accounts, inProgress } = useMsal();
    const user = accounts.length > 0 && accounts[0];
    if (!user["idTokenClaims"])
        return false
    if (!user["idTokenClaims"]["roles"] || user["idTokenClaims"]["roles"].length <= 0)
        return false
    var roles = user["idTokenClaims"]["roles"];

    //2. check each rol for permission
    for (const userRol of roles) {
        var permissions = permissionsTree[userRol];
        if (permissions && permissions.length > 0) {
            for (const pageItem in permissions) {
                if (href && (href == permissions[pageItem].href))
                    return permissions[pageItem].visible
                if (title && (title == permissions[pageItem].title))
                    return permissions[pageItem].visible
            }
        }
    }
    return false;
}

export default CheckRol;
