import React from "react";
// import {Helmet} from "react-helmet-async";
import {
  Grid
  // Box,
  // Button as MuiButton,
  // Card,
  // CardContent,
  // Divider as MuiDivider,
  // Grid,
  // Link,
  // Typography as MuiTypography
} from "@mui/material";
// import styled from "@emotion/styled";
// import {spacing} from "@mui/system";

// import {
//     // Wind,
//     // Twitter,
// } from "react-feather";
// import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
// import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
// import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
// import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

// const Typography = styled(MuiTypography)(spacing);
// const Divider = styled(MuiDivider)(spacing);
// const Button = styled(MuiButton)(spacing);
//
// const Centered = styled.div`
//   text-align: center;
// `;

const Home = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards" width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiOWU3M2I1ZDMtMzBlYS00NDBhLWJmZjYtZTI1Njk5YjFkZmRkIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};

export default Home;
