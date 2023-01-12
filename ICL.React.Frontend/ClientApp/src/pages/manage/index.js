import React from "react";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Grid,
  Link,
  Paper,
  Typography
} from "@mui/material";
import styled from "@emotion/styled";
import {display, spacing} from "@mui/system";
import { orange } from "@mui/material/colors";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Manage = () => {
  return (
    <React.Fragment>
        
      <Grid container spacing={2} alignItems="stretch">
        <Grid item md={4} xs={4} px={5} sx={{marginTop:10}} display="flex">
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" fontSize={35} fontWeight="300" component="div">
                  Start-Up & Mobilization
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    <Link to="/HqStartUpstatus">HQ Start Up Status</Link>
                    
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
            
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Buy-In Status
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Staffing Levels – HQ
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Staffing Levels – Countries
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} display="flex" >
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"orange", marginBottom:20 }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" fontSize={35} fontWeight="300" component="div">
                Performance Monitoring
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Work Plan Status
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    KPI Dashboard
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left"  fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    QASP Monitoring
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
           
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4} px={5} sx={{marginTop:10}} display="flex">
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" fontSize={35} fontWeight="300" component="div">
                Mission Satisfaction Surveys
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
               
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontWeight="300" fontSize={30} mb={2}>
                    <Grid item md={12}>
                    Annual Survey 
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontWeight="300" fontSize={30} mb={2}>
                    <Grid item md={12}>
                    Survey Results
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
          
              </CardContent>
            </Card>
          </Paper>
        </Grid>
       
     
        
     
        <Grid item md={4} sx={{marginTop:10}} display="flex">
          <Paper square={true} sx={{ borderTop: 5, borderTopColor:"orange" }}  elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" fontSize={35} fontWeight="300" component="div">
                Stakeholder Engagement
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Stakeholder Register
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Stakeholder Strategy
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
           
            
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} sx={{marginTop:10}} display="flex">
          <Paper square={true} sx={{ borderTop: 5, borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" fontSize={35} fontWeight="300" component="div">
                Prime Contract Management
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Salary Approval Requests
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Travel Approval Requests
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
              
                  <Grid item md={9}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Other Approval Requests
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Deliverable Submissions
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                 <Grid item md={12}>
                   <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                   <Grid item md={12}>
                   Small Business Utilization
                       <Divider />
                   </Grid>
                   </Grid>
                 </Grid>
               </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} sx={{marginTop:10}} display="flex">
          <Paper square={true} sx={{ borderTop: 5, borderTopColor:"orange" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" fontSize={35} fontWeight="300" component="div">
                Financial Management
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Incremental Obligation Management
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Letter of Credit Management
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
              
                  <Grid item md={9}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Monthly Financial Reports
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Distribution Cost Analysis
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                 <Grid item md={12}>
                   <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                   <Grid item md={12}>
                   Warehousing Cost Analysis
                       <Divider />
                   </Grid>
                   </Grid>
                 </Grid>
               </Grid>
               <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                 <Grid item md={12}>
                   <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                   <Grid item md={12}>
                   Total Landed Costs Analysis
                       <Divider />
                   </Grid>
                   </Grid>
                 </Grid>
               </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      
      </Grid>
     
    </React.Fragment>
  );
};
export default Manage;
