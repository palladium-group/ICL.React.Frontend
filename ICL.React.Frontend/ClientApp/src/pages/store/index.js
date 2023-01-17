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
import FirstImg from "../../vendor/illustration-store.png";
import {NavLink} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Store = () => {
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
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#FFB500" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Inventory Monitoring
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/store/inventory-analysis`}>
                        Global Inventory
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/store/inventory-analysis`}>
                        Country Inventory
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
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#FFB500" }} style={{height:'100%'}} elevation={8}>
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
                      <NavLink to={`/store/parsyl`}>
                        Global Temperature Monitoring
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/store/parsyl`}>
                        Country Temperature Monitoring
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
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#FFB500" }} style={{height:'100%'}} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Insurance
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                    Insurance Requirements
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    Insurance Monitoring and Alerts
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item md={4}  xs={4} px={5} sx={{marginTop:10}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#FFB500" }} style={{height:'100%'}} elevation={8}>
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
                      <NavLink to={`/store/vendor-score-card`}>Vendor Score Card</NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Corrective Action Reports
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
                    Quartlery Reviews
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
export default Store;