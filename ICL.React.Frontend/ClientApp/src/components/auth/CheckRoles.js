import React from "react";
import { useMsal } from "@azure/msal-react";

const permissionsTree = {
    "Palladium.User":
        [
            {
                href: "/dashboard",
                title: "Clearing",
                visible: true
            },
            {
                href: "/control-tower",
                title: "Shipment",
                visible: true
            },
            {
                href: "pos",
                title: "Pos/ASN",
                visible: false
            },
            {
                href: "/dashboard",
                title: "Warehouse",
                visible: true
            },
            {
                href: "inbound",
                title: "Inbound",
                visible: true
            },
            {
                href: "outbound",
                title: "Outbound",
                visible: true
            },
            {
                href: "monitoring",
                title: "Monitoring",
                visible: true
            },
            {
                href: "/transportation",
                title: "Transportation And Planning",
                visible: true
            },
            {
                href: "costing",
                title: "Costing",
                visible: true
            },
            {
                href: "tendering-contracting",
                title: "Tendering Contracting",
                visible: true
            },
            {
                href: "transportation-distribution",
                title: "Transportation And Distribution",
                visible: true
            },
            {
                href: "chain-of-custody",
                title: "Chain of Custody",
                visible: true
            },
            {
                href: "/dashboard",
                title: "Delivery",
                visible: true
            },
            {
                href: "ePOD",
                title: "ePOD",
                visible: true
            },
            {
                href: "",
                title: "Returns",
                visible: true
            },
            {
                href: "/inventory",
                title: "Inventory Analysis and Planning",
                visible: true
            },
            {
                href: "/dashboard/",
                title: "Consumption Prediction",
                visible: true
            },
            {
                href: "/dashboard/",
                title: "Allocation Prediction",
                visible: true
            },
        ],
    "Super.User":[

    ]
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

    if (roles && roles.length>0) {
        if (roles.includes('Super.User'))
            return true;
    }
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
