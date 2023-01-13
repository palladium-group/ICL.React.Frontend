import React from "react";
import {
  Card as MuiCard,
  CardMedia, Divider, Grid, Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/kpmg-deliver.png";
import {Helmet} from "react-helmet-async";

const Card = styled(MuiCard)(spacing);

const Deliver = () => {
  return (
    <React.Fragment>
      <Helmet title="Formik" />
      <Typography variant="h3" gutterBottom display="inline">
        Digital Twins / Deliver
      </Typography>
      <Divider my={6} />
      <Grid container spacing={2}>
        <Grid item md={12}  xs={12}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              sx={{ height: 550 }}
              image={FirstImg}
            />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Deliver;