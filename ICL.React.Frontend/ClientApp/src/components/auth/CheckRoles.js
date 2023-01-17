import React from "react";
import { useMsal } from "@azure/msal-react";

const menues =
  [
    {
      href: "",
      title: "Home",
      visible: true
    },
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
  const preventAccess = m => protectedMenues.includes(m.href);

  return  menues.map(m => (preventAccess(m) ? { ...m, visible: false } : m))
};

const permissionsTree = {
    "Washington.User": protect([]),
    "Country.User": protect([]),
    "HQ.User": protect([]),
};

function CheckRol(href, title) {
    //1. get the roles of the user
    const { instance, accounts, inProgress } = useMsal();
    const user = accounts.length > 0 && accounts[0];
    if (!user["idTokenClaims"])
        return false
    if (!user["idTokenClaims"]["roles"] || user["idTokenClaims"]["roles"].length <= 0)
        return false
    const roles = user["idTokenClaims"]["roles"];

    //2. check each rol for permission
    for (const userRol of roles) {
        const permissions = permissionsTree[userRol];
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
