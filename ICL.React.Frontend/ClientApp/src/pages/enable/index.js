import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent, CardMedia,
  Divider as MuiDivider, Grid, Paper, Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/illustration-enable.png";
import {NavLink} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Enable = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <React.Fragment>
      <Paper square={true} sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ height: 220 }}
          image={FirstImg}
        />
      </Paper>
      <Grid container spacing={2} alignItems="stretch" p={isLgUp ? 12 : 5}>
        <Grid item md={4}  xs={4} px={5}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#05C3DE" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Digital Twins
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                    Network Monitoring
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/enable/demand`}>
                      Network Analytics
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/enable/deliver`}>
                      Network Optimization
                      </NavLink>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#05C3DE" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chain of Custody
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/enable/commodity-tracker`}>
                        Commodity Tracer
                      </NavLink>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#05C3DE" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Green House Gas Monitoring
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/enable/green-house-gas-monitoring`}>
                      Annual Emissions Report
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                     
                      Global Monitoring
                   
                      <Divider />
                    </Grid>
                    <Grid item md={12}>                      
                      Country Monitoring                    
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} >
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#05C3DE" }} style={{height:'100%'}}  elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Risk Management
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Incident Management
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Risk Profiles
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Risk Alerts
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} >
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#05C3DE" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Predefined Reports
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/enable/shipment`}>
                        Shipment
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/enable/warehousing`}>
                        Warehousing
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/enable/transportation`}>
                        Transportation
                      </NavLink>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}} >
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#05C3DE" }} style={{height:'100%'}}  elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Custom Reports
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/enable/inventory`}>
                        Inventory
                      </NavLink>
                      <Divider />
                    </Grid>
                    {/*<Grid item md={12}>*/}
                    {/*  <NavLink to={`/enable/custom-reports`}>*/}
                    {/*    Reports*/}
                    {/*  </NavLink>*/}
                    {/*  <Divider />*/}
                    {/*</Grid>*/}
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
export default Enable;