import React from "react";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Grid,
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
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}}>
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"red" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" fontSize={35} fontWeight="300" component="div">
                Planning Inputs
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Quantification Reports
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
            
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Quarterly Supply Plans
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Orders Fulfilled (historical)
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Third Party Data Feeds
                        <Divider />
                    </Grid>
                     
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                 <Grid item md={12}>
                   <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                   <Grid item md={12}>
                   PSA Inbound Product Monitoring
                       <Divider />
                   </Grid>
                    
                   </Grid>
                 </Grid>
               </Grid>
               <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                 <Grid item md={12}>
                   <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                   <Grid item md={12}>
                   Customs Requirements
                       <Divider />
                   </Grid>
                    
                   </Grid>
                 </Grid>
               </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4} px={5} sx={{marginTop:10}}  >
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"red", marginBottom:20 }} className="fullHeight" height="100" elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" fontSize={35} fontWeight="300" component="div">
                Order Intake
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Orders Received (current)
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontSize={25} fontWeight="300" mb={2}>
                    <Grid item md={12}>
                    Orders Validated (current)
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
        
           
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4} px={5} sx={{marginTop:10}}>
          <Paper square={true} sx={{ borderTop: 5,borderTopColor:"red" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" fontSize={35} fontWeight="300" component="div">
                Monthly Operational Plans 

                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
               
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontWeight="300" fontSize={30} mb={2}>
                    <Grid item md={12}>
                    Supply
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                  <Grid item md={12}>
                    <Grid container direction="column" alignItems="left" fontWeight="300" fontSize={30} mb={2}>
                    <Grid item md={12}>
                    Demand
                        <Divider />
                    </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                 <Grid item md={12}>
                   <Grid container direction="column" alignItems="left" fontWeight="300" fontSize={30} mb={2}>
                   <Grid item md={12}>
                   Cost
                       <Divider />
                   </Grid>
                   </Grid>
                 </Grid>
               </Grid>
               <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                 
                 <Grid item md={12}>
                   <Grid container direction="column" alignItems="left" fontWeight="300" fontSize={30} mb={2}>
                   <Grid item md={12}>
                   Rolling 12-month master plan
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
