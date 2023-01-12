import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent, CardMedia,
  Divider as MuiDivider,
  Grid, Paper, Typography,
} from "@mui/material";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/illustration-deliver.png";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Source = () => {
  return (
    <React.Fragment>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          sx={{ height: 299 }}
          image={FirstImg}
        />
      </Card>
      <br />
      <Grid container spacing={2} alignItems="stretch">
        <Grid item md={4} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#8D6E97" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Market Conditions
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Primary and Secondary Data
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Market Research
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#8D6E97" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Logistics Category Profiles
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Customs Clearance
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Storage
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Delivery
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Products
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Network Design
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#8D6E97" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Procurement
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Vendor Registry
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Underqualified Bidder Action Plans
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Request for Proposals(Annual)
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Request for Proposals(Spot Market)
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Service Level Agreements
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Purchase Orders
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Source;