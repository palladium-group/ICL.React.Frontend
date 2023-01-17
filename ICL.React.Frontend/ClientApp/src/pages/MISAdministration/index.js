import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent, CardMedia,
  Divider as MuiDivider, Grid, Paper, Typography,
} from "@mui/material";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/illustration-deliver.png";
import {NavLink} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const MISAdministration = () => {
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
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#4D4D4D" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Interoperability
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      {/*<a href="https://portal.azure.com/#view/Microsoft_Azure_MonitoringMetrics/Metrics.ReactView/ResourceId/%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL/TimeContext~/%7B%22options%22%3A%7B%22grain%22%3A1%7D%2C%22relative%22%3A%7B%22duration%22%3A3600000%7D%7D/Chart~/%7B%22metrics%22%3A%5B%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22IncomingRequests%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Incoming%20Requests%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22SuccessfulRequests%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Successful%20Requests%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22ServerErrors%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Server%20Errors.%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22UserErrors%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22User%20Errors.%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22ThrottledRequests%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Throttled%20Requests.%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%5D%2C%22title%22%3A%22Requests%22%2C%22titleKind%22%3A2%2C%22timespan%22%3A%7B%22relative%22%3A%7B%22duration%22%3A3600000%7D%2C%22grain%22%3A1%2C%22showUTCTime%22%3Afalse%7D%2C%22visualization%22%3A%7B%22chartType%22%3A2%7D%7D/openInEditMode~/false" target="_blank" rel="noopener noreferrer">Middleware Status</a>*/}
                      {/*&nbsp;&nbsp;&nbsp;*/}
                      {/*<br />*/}
                      <NavLink to={`/MISAdministration/middle-ware-status`}>
                        Middleware Status
                      </NavLink>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#4D4D4D" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Management
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Data Warehouse
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Data Lake
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Data Marts
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Logic Apps
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Queues, Subscriptions, and Events
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#4D4D4D" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  User Management
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      User Registry
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Assign New User
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Remove User
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#4D4D4D" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Information Security
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <a href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2119696690/Information+Security" target="_blank" rel="noopener noreferrer">Policy</a>
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
export default MISAdministration;