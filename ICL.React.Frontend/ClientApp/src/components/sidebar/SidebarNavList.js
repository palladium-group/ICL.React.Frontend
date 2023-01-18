import React from "react";
import { useLocation } from "react-router-dom";
import CheckRol from "../../components/auth/CheckRoles";

import reduceChildRoutes from "./reduceChildRoutes";

const SidebarNavList = (props) => {
  const { pages, depth } = props;
  const router = useLocation();
  const currentRoute = router.pathname;

  //Code to check permissions
  let pages2 = [];
  for (const itemPage of pages) {
    if (CheckRol(null, itemPage.title))
    {
      pages2.push(itemPage);
    }
  }

  const childRoutes = pages2.reduce(
      (items, page) => reduceChildRoutes({ items, page, currentRoute, depth }),
      []
  );

  return <React.Fragment>{childRoutes}</React.Fragment>;
};

export default SidebarNavList;
