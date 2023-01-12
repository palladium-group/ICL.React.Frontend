import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import {
  // Avatar as MuiAvatar,
  Badge, Box,
  // Box,
  Button as MuiButton, Divider, Drawer,
  // Divider as MuiDivider,
  Grid,
  IconButton, ListItemButton,
  // List,
  // ListItem,
  // ListItemAvatar,
  // ListItemText,
  Popover as MuiPopover,
  // SvgIcon,
  Tooltip,
  Typography as MuiTypography,
} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
// import { Bell, Home, UserPlus, Server } from "react-feather";
import {spacing} from "@mui/system";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import {NavLink} from "react-router-dom";

const Typography = styled(MuiTypography)(spacing);
// const Divider = styled(MuiDivider)(spacing);
const Button = styled(MuiButton)(spacing);

const Centered = styled.div`
  text-align: center;
`;

const Popover = styled(MuiPopover)`
  .MuiPaper-root {
    width: 300px;
    ${(props) => props.theme.shadows[1]};
    border: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

const Indicator = styled(Badge)`
  .MuiBadge-badge {
    background: ${(props) => props.theme.header.indicator.background};
    color: ${(props) => props.theme.palette.common.white};
  }
`;

const Wrapper = styled.div`
  width: 386px;
  overflow-x: hidden;
`;

const Heading = styled(ListItemButton)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }
`;

function Demos() {
  return (
    <Wrapper>
      <Heading>
        <Box sx={{ fontWeight: 'bold' }}>
          EXECUTION APPS
        </Box>
      </Heading>

      <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
        <Grid container spacing={6}>
          <Grid item md={12}>
            <a href="https://opsuat.freightintime.com/" target="_blank">
              SCM Profit: Store and Deliver
            </a>
            <Divider />
          </Grid>
          <Grid item md={12}>
            Mercell: Source
            <Divider />
          </Grid>
          <Grid item md={12}>
            MacroEyes: Plan
            <Divider />
          </Grid>
          <Grid item md={12}>
            Comcare: Third Party Monitoring
            <Divider />
          </Grid>
        </Grid>
      </Box>

      <Heading>
        <Box sx={{ fontWeight: 'bold' }}>
          ANALYTICS APPS
        </Box>
      </Heading>

      <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
        <Grid container spacing={6}>
          <Grid item md={12}>
            ChainLockR: Risk Management
            <Divider />
          </Grid>
          <Grid item md={12}>
            <a href="https://thepalladiumgroup.atlassian.net/servicedesk/customer/portal/26" target="_blank">JIRA/Confluence: Quality Management</a>
            <Divider />
          </Grid>
          <Grid item md={12}>
            Greenhouse: Greenhouse GasMonitoring
            <Divider />
          </Grid>
          <Grid item md={12}>
            <a href="https://app.parsyl.com/report/assets?dataWindow=7&dataType=humidity&weeklyRate=false" target="_blank">Parsyl: Temperature Monitoring</a>
            <Divider />
          </Grid>
          <Grid item md={12}>
            KPMG: Digital Twin
            <Divider />
          </Grid>
          <Grid item md={12}>
            Quetica: Freight Bill Audit
            <Divider />
          </Grid>
          <Grid item md={12}>
            PowerBI: Custom Reporting
            <Divider />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}

function NavbarNotificationsDropdown() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Apps">
        <IconButton color="inherit" ref={ref} onClick={handleOpen} size="large">
          <Indicator>
            <AppsIcon />
          </Indicator>
        </IconButton>
      </Tooltip>
      <Drawer anchor="right" open={isOpen} onClose={handleClose}>
        <Demos />
      </Drawer>
    </React.Fragment>
  );
}

export default NavbarNotificationsDropdown;
