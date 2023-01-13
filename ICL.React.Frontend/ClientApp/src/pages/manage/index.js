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
import FirstImg from "../../vendor/illustration-manage.png";
import {NavLink} from "react-router-dom";

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
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Start-Up & Mobilization
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/manage/hq-start-up-status`}>
                        HQ Start Up Status
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Buy-In Status
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Staffing Levels – HQ
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Staffing Levels – Countries
                      <Divider />
                    </Grid>

                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Performance Monitoring
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Work Plan Status
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      KPI Dashboard
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      QASP Monitoring
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mission Satisfaction Surveys
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Annual Survey
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Survey Results
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderTopColor:"orange" }}  elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stakeholder Engagement
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Stakeholder Register
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Stakeholder Strategy
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Prime Contract Management
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Salary Approval Requests
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Travel Approval Requests
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Other Approval Requests
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Deliverable Submissions
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Small Business Utilization
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Financial Management
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Incremental Obligation Management
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Letter of Credit Management
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Monthly Financial Reports
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Distribution Cost Analysis
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Warehousing Cost Analysis
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Total Landed Costs Analysis
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
