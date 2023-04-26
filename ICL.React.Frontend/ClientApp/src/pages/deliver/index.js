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
import FirstImg from "../../vendor/illustration-deliver.png";
import {NavLink} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Deliver = () => {
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
        <Grid item md={4}  xs={4} px={5}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#64A70B" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Commodity Tracking
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={'/deliver/commodity-tracking'}>
                        Global Tracking
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a href="#">
                        Country Tracking
                      </a>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#64A70B" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Temperature Monitoring
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <a target="_blank" rel="noopener noreferrer" href="https://app.parsyl.com/report/shipments/v3/2b70022c-5915-4cc3-a42e-d1926c600b18?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI4MjM5NDUsImlhdCI6MTY4MjM5MTk0NSwiaXNzIjoicGFyc3lsLWFwaSIsInVzZXJJZCI6Ijc1Mzc0OWM2LTQ0MTUtNDA1Zi1iYmMzLTBiMmU1NjljNDdlMyIsInJlc291cmNlSWQiOiIyYjcwMDIyYy01OTE1LTRjYzMtYTQyZS1kMTkyNmM2MDBiMTgiLCJyZXNvdXJjZVR5cGUiOiJzaGlwbWVudCJ9.jHq7nxab10el6GpM8ok35kw55jJr70kXc35CEZW0j2g">
                        Global Monitoring
                      </a>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a target="_blank" rel="noopener noreferrer" href="https://app.parsyl.com/report/shipments/v3/2b70022c-5915-4cc3-a42e-d1926c600b18?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI4MjM5NDUsImlhdCI6MTY4MjM5MTk0NSwiaXNzIjoicGFyc3lsLWFwaSIsInVzZXJJZCI6Ijc1Mzc0OWM2LTQ0MTUtNDA1Zi1iYmMzLTBiMmU1NjljNDdlMyIsInJlc291cmNlSWQiOiIyYjcwMDIyYy01OTE1LTRjYzMtYTQyZS1kMTkyNmM2MDBiMTgiLCJyZXNvdXJjZVR5cGUiOiJzaGlwbWVudCJ9.jHq7nxab10el6GpM8ok35kw55jJr70kXc35CEZW0j2g">
                        Country Monitoring
                      </a>
                      <Divider />
                    </Grid>              
                 
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4}  xs={4} px={5}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#64A70B" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Proof of Delivery
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/deliver/proof-of-delivery`}>
                        Proof of Delivery Repository
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
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#64A70B" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  3PL Performance
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/dashboard/outbound`}>Vendor Score Card</NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    Vendor Self Inspection Reports
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    Annual Site Visit Reports
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Quarterly Reviews
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
export default Deliver;