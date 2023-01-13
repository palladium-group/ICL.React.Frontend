import React from "react";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent, CardMedia,
  Divider as MuiDivider,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import styled from "@emotion/styled";
import {display, spacing} from "@mui/system";
import { orange } from "@mui/material/colors";
import FirstImg from "../../vendor/illustration-plan.png";
import {NavLink, Link} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Manage = () => {
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
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}}>
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"red" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Planning Inputs
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      {/* <NavLink to={`/plan/quantification-reports`}>
                        Quantification Reports
                      </NavLink> */}
                      <a target="_blank" rel="noopener noreferrer" href={`https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118385665/Quantification+Reports`}>
                        Quantification Reports
                      </a>
                      <Divider />
                  </Grid>
                    <Grid item md={12}>
                      Quarterly Supply Plans
                      <Divider />
                      </Grid>
                    <Grid item md={12}>
                      Orders Fulfilled (historical)
                      <Divider />
                      </Grid>
                    <Grid item md={12}>
                      Third Party Data Feeds
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      PSA Inbound Product Monitoring
                      <Divider />
                  </Grid>
                    <Grid item md={12}>
                      Customs Requirements
                      <Divider />
                </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4} px={5} sx={{marginTop:10}} >
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"red" }} style={{height:'100%'}} className="fullHeight" height="100" elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Order Intake
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Orders Received (current)
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Orders Validated (current)
                      <Divider />
                  </Grid>
                </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4} px={5} sx={{marginTop:10}} >
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"red" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Monthly Operational Plans
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Supply
                      <Divider />
                      </Grid>
                    <Grid item md={12}>
                      Demand
                      <Divider />
                      </Grid>
                    <Grid item md={12}>
                      Cost
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Rolling 12-month master plan
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
export default Manage;
