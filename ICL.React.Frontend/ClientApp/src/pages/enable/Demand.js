import React from "react";
import {
  Card as MuiCard,
  CardMedia, Divider, Grid, Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/kpmg-demand.png";
import FirstImg2 from "../../vendor/kpmg-demand2.png";
import {Helmet} from "react-helmet-async";

const Card = styled(MuiCard)(spacing);

const Demand = () => {
  return (
    <React.Fragment>
      <Helmet title="Demand" />
      <Typography variant="h3" gutterBottom display="inline">
        Digital Twins / Demand
      </Typography>
      <Divider my={6} />
      <Grid container spacing={2} alignItems="stretch">
        <Grid item md={12}  xs={12}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              sx={{ height: 550 }}
              image={FirstImg}
            />
          </Card>
        </Grid>

        <Grid item md={12}  xs={12} sx={{ marginTop: 20 }}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              sx={{ height: 550 }}
              image={FirstImg2}
            />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Demand;