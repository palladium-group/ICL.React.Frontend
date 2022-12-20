import React from "react";
import {Helmet} from "react-helmet-async";
import {
    // Box,
    Button as MuiButton,
    // Card,
    // CardContent,
    Divider as MuiDivider,
    Grid,
    // Link,
    Typography as MuiTypography
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";

// import {
//     // Wind,
//     // Twitter,
// } from "react-feather";
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
// import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const Typography = styled(MuiTypography)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Button = styled(MuiButton)(spacing);

const Centered = styled.div`
  text-align: center;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Helmet title="Home" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Home
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
        spacing={24}
      >
        <Grid item md={6}>
          <Centered>
            <a href="https://opsuat.freightintime.com" target="_blank" rel="noopener noreferrer">
              <Button mr={2} variant="contained">
                <LocalShippingOutlinedIcon sx={{ fontSize: 50 }}  />
              </Button>
              <Grid item>
                Freight in Time - SCM Profit
              </Grid>
            </a>
          </Centered>
        </Grid>
          <Grid item md={6}>
            <Centered>
              <Button mr={2} variant="contained">
                <AcUnitOutlinedIcon sx={{ fontSize: 50 }}  />
              </Button>
              <Grid item>
                Sourcing(i+)
              </Grid>
            </Centered>
          </Grid>
          <Grid item md={6}>
            <Centered>
              <Button mr={2} variant="contained">
                <AttachMoneyOutlinedIcon sx={{ fontSize: 50 }}  />
              </Button>
              <Grid item>
                Finance(CostPoint)
              </Grid>
            </Centered>
          </Grid>
          <Grid item md={6}>
            <Centered>
              <Button mr={2} variant="contained">
                <AirplanemodeActiveOutlinedIcon sx={{ fontSize: 50 }}  />
              </Button>
              <Grid item>
                Logistics
              </Grid>
            </Centered>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
