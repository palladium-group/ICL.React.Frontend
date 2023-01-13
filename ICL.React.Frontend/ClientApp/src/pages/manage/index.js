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
import {spacing} from "@mui/system";
// import { orange } from "@mui/material/colors";
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
                    <a href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2117697540/Staffing+Levels+-+Countries" target="_blank" rel="noopener noreferrer">  Staffing Levels – Countries</a>
                   
                     
                     
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
                        Global Fund
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
                    <a href="https://thepalladiumgroup.atlassian.net/servicedesk/customer/portal/26/group/70/create/271" target="_blank" rel="noopener noreferrer"> Annual Survey</a>
                     
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
                    <a href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2117730305/Stakeholder+Register" target="_blank" rel="noopener noreferrer">Stakeholder Register</a>
                      
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
                      <NavLink to={`/manage/incremental-obligation-management`}>
                        Incremental Obligation Management
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a target="_blank" rel="noopener noreferrer" href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118352933/Incremental+Obligation+Management+-+Reports">
                        Incremental Obligation Management - Reports
                      </a>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/manage/letter-of-credit`}>
                        Letter of Credit Management
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Monthly Financial Reports
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
