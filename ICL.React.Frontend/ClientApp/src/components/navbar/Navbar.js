import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import {
  Grid,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar,
} from "@mui/material";
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Menu as MenuIcon } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavbarNotificationsDropdown from "./NavbarNotificationsDropdown";
import NavbarUserDropdown from "./NavbarUserDropdown";
import {useNavigate} from "react-router-dom";

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

const outerTheme = createTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Manrope',
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
    fontWeight: 600,
  },
  palette: {
    primary: {
      main: "#000",
    },
  },
});

const options = {
  shouldForwardProp: (prop) => prop !== 'bgcolor',
};
const StyledChip = styled(
  Chip,
  options,
)(({ }) => ({
  color: 'white',
  backgroundColor: "#000",
}));

const Navbar = ({ onDrawerToggle }) => {
  const navigate = useNavigate();
  const handleStandardReports  = () => {
    navigate("/standard-reports");
  };
  const handleCustomReports = () => {
    navigate("/incident-management");
  };
  const handleHsotDashboards = () => {
    navigate("/uk-hsot-dashboards");
  };
  const handlePathWaysDashboards = () => {
    navigate("/path-ways-dashboards");
  };
  return (
    <React.Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
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
            <Grid item sm={1}>&nbsp;</Grid>
            <Grid item>
              <ThemeProvider theme={outerTheme}>
                <Box
                  sx={{
                    '& > :not(style) + :not(style)': {
                      ml: 4,
                    },
                  }}
                >
                  <StyledChip label="Report an Incident" component="a" target="_blank" href="https://issuesandriskregistry.thepalladiumgroup.com/" clickable />
                  {/*<StyledChip label="HQ Office" component="a" href="#" clickable />*/}
                  {/*<StyledChip label="Country Offices" component="a" href="#" clickable />*/}
                  <StyledChip label="Custom Reports" component="a" onClick={handleCustomReports} clickable />
                  <StyledChip label="Standard Reports" component="a" onClick={handleStandardReports} clickable />
                  <StyledChip label="UK HSOT Dashboards" component="a" onClick={handleHsotDashboards} clickable />
                  <StyledChip label="Pathways Dashboards" component="a" onClick={handlePathWaysDashboards} clickable />
                </Box>
              </ThemeProvider>
            </Grid>
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
