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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
// import { orange } from "@mui/material/colors";
import FirstImg from "../../vendor/illustration-manage.png";
import {NavLink} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Manage = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <React.Fragment>
      <Paper square={true} sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ height: 220, objectFit: "fill" }}
          image={FirstImg}
        />
      </Paper>
      <Grid container spacing={2} alignItems="stretch" p={isLgUp ? 12 : 5}>
        <Grid item md={4}  xs={4} px={5} style={{display: 'flex'}}>
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
                    <NavLink to={`/manage/buy-in-status`}>
                    Buy-In Status
                      </NavLink>
                     
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    <NavLink to={`/manage/staffing-levels-hq`}>
                    Staffing Levels – HQ
                      </NavLink>
                      
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/staffing-levels-countries`} >
                        Staffing Levels – Countries
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>  
                    <NavLink to={'/manage/regional-operations-team'}  >
                      Staffing Level- Cost Shared Regional Operations Team
                    </NavLink>
                      <Divider />
                    </Grid>

                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} style={{display: 'flex'}}>
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
                      <NavLink to={`/manage/performance-monitoring`}>
                        Performance Dashboard
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/work-plan-status`}>
                        Work Plan Status
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    <NavLink to={`/manage/kpi-dashboard`}>
                    KPI Dashboard
                      </NavLink>
                     
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      QASP Monitoring
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/global-fund`}>
                      Third Party Monitoring
                      </NavLink>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} style={{display: 'flex'}}>
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
                      <NavLink to={`/manage/annual-survey`}>
                        Annual Survey
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/survey-results`}>
                        Survey Results
                      </NavLink>
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
                      <NavLink to={`/manage/stakeholder-register`}>
                        Stakeholder Register
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    <a href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118123557/Stakeholder+Strategy" target="_blank" rel="noopener noreferrer"> Stakeholder Strategy</a>
                     
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
                      <NavLink to={`/manage/salary-approval-requests`}>
                        Salary Approval Requests
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/travel-approval-requests`}>
                        Travel Approval Requests
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2119696434/Other+Approvals+Requests" target="_blank" rel="noopener noreferrer">Other Approval Requests</a>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/deliverable-submissions`}>
                        Deliverable Submissions
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/small-business`}>
                        Small Business Utilization
                      </NavLink>
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
                      <NavLink to={`/manage/incremental-obligation-management`}>
                        Incremental Obligation Management
                      </NavLink>
                      <Divider />
                    </Grid>
                    {/*<Grid item md={12}>*/}
                    {/*  <a target="_blank" rel="noopener noreferrer" href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118352933/Incremental+Obligation+Management+-+Reports">*/}
                    {/*    Incremental Obligation Management - Reports*/}
                    {/*  </a>*/}
                    {/*  <Divider />*/}
                    {/*</Grid>*/}
                    <Grid item md={12}>
                      <NavLink to={`/manage/letter-of-credit`}>
                        Letter of Credit Management
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a target="_blank" rel="noopener noreferrer" href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2120679425/Monthly+Financial+Reports">
                        Monthly Financial Reports
                      </a>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    <NavLink to={`/manage/distribution-cost-analysis`}>
                    Distribution Cost Analysis
                      </NavLink>
                     
                      
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    <NavLink to={`/manage/warehousing-cost-analysis`}>
                    Warehousing Cost Analysis
                      </NavLink>
                      
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    <NavLink to={`/manage/total-landed-costs-analysis`}>
                    Total Landed Costs Analysis
                      </NavLink>
                     
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
