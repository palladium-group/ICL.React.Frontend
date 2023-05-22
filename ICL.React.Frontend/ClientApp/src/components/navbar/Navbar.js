import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import {
  Grid,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar, Typography,
} from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Menu as MenuIcon } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavbarNotificationsDropdown from "./NavbarNotificationsDropdown";
import NavbarUserDropdown from "./NavbarUserDropdown";

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Navbar = ({ onDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" spacing={6}>
            <Grid item sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography  variant="button" display="block" gutterBottom>Supply Chain Management</Typography>
            </Grid>
            <Grid item>
              <Typography  variant="button" display="block" gutterBottom>Enterprise Resources</Typography>
            </Grid>
            <Grid item>
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Typography  variant="button" display="block" gutterBottom>
                  Master Data Registry
                </Typography>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Products</MenuItem>
                <MenuItem onClick={handleClose}>Locations</MenuItem>
                <MenuItem onClick={handleClose}>Stakeholders</MenuItem>
                <MenuItem onClick={handleClose}>Transport</MenuItem>
                <MenuItem onClick={handleClose}>Carriers</MenuItem>
                <MenuItem onClick={handleClose}>Units Of Measure</MenuItem>
                <MenuItem onClick={handleClose}>MDR Quality</MenuItem>
                <MenuItem onClick={handleClose}>Governance</MenuItem>
                <MenuItem onClick={handleClose}>Master Data Configuration</MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <Typography  variant="button" display="block" gutterBottom>Report/Analytics</Typography>
            </Grid>
            {/*<Grid item>*/}
            {/*  <ThemeProvider theme={outerTheme}>*/}
            {/*    <Box*/}
            {/*      sx={{*/}
            {/*        '& > :not(style) + :not(style)': {*/}
            {/*          ml: 4,*/}
            {/*        },*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <StyledChip label="Report an Incident" component="a" target="_blank" href="https://issuesandriskregistry.thepalladiumgroup.com/" clickable />*/}
            {/*      /!*<StyledChip label="HQ Office" component="a" href="#" clickable />*!/*/}
            {/*      /!*<StyledChip label="Country Offices" component="a" href="#" clickable />*!/*/}
            {/*      <StyledChip label="Custom Reports" component="a" onClick={handleCustomReports} clickable />*/}
            {/*      <StyledChip label="Standard Reports" component="a" onClick={handleStandardReports} clickable />*/}
            {/*      <StyledChip label="UK HSOT Dashboards" component="a" onClick={handleHsotDashboards} clickable />*/}
            {/*    </Box>*/}
            {/*  </ThemeProvider>*/}
            {/*</Grid>*/}
            <Grid item xs />
            <Grid item>
              {/*<NavbarMessagesDropdown />*/}
              <NavbarNotificationsDropdown />
              {/*<NavbarUSAIDIcon />*/}
              {/*<NavbarLanguagesDropdown />*/}
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withTheme(Navbar);
