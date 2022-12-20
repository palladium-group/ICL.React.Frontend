import React from "react";
import styled from "@emotion/styled";
import {Drawer as MuiDrawer, ListItemButton} from "@mui/material";
import {ReactComponent as Logo} from "../../vendor/USAID_Logo.svg";

const Drawer = styled(MuiDrawer)`
  //border-right: 0;
  //
  //> div {
  //  border-right: 0;
  //}
`;

const Brand = styled(ListItemButton)`
  // font-size: ${(props) => props.theme.typography.h5.fontSize};
  // font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  // color: ${(props) => props.theme.sidebar.header.color};
  // //background-color: ${(props) => props.theme.sidebar.header.background};
  // font-family: ${(props) => props.theme.typography.fontFamily};
  // //min-height: 56px;
  // //padding-left: ${(props) => props.theme.spacing(6)};
  // //padding-right: ${(props) => props.theme.spacing(6)};
  // //justify-content: center;
  // cursor: pointer;
  // flex-grow: 0;
  //
  // ${(props) => props.theme.breakpoints.up("sm")} {
  //   min-height: 64px;
  // }
  //
  // &:hover {
  //   background-color: ${(props) => props.theme.sidebar.header.background};
  // }
`;

const BrandIcon = styled(Logo)`
  //margin-right: ${(props) => props.theme.spacing(2)};
  // color: ${(props) => props.theme.sidebar.header.brand.color};
  // fill: ${(props) => props.theme.sidebar.header.brand.color};
  // //width: 32px;
  // height: 55px;
`;

const NavbarUSAIDIcon = () => {
  return (
    <Drawer variant="permanent">
      <Brand>
        <BrandIcon />
      </Brand>
    </Drawer>
  );
};

export default NavbarUSAIDIcon;