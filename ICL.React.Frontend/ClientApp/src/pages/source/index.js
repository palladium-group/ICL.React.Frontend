import React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent, CardMedia,
  Divider as MuiDivider,
  Grid, Paper, Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/illustration-source.png";
import {NavLink} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Source = () => {
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
        <Grid item md={4} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#8D6E97" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Market Conditions
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={""}>Primary and Secondary Data</NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a target="_blank" rel="noopener noreferrer" href="https://thepalladiumgroup.atlassian.net/l/cp/1U2Y9HNy">Market Research</a>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#8D6E97" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Logistics Category Profiles
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                    <NavLink to={`/source/warehousing`}>
                    Warehousing
                      </NavLink>
                    
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                    Distribution
                      <Divider />
                    </Grid>
                    <Grid item md={12}>                      
                      <NavLink to={`/source/products`}>
                        Products
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <NavLink to={`/source/network-design`}>
                        Network Design
                      </NavLink>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} style={{display: 'flex'}}>
          <Paper square={true} sx={{ borderTop: 5, borderColor: "#8D6E97" }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Procurement
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <NavLink to={`/source/vendor-registry`}>
                        Vendor Registry
                      </NavLink>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a href="#">
                        Underqualified Bidder Action Plans
                      </a>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a href="#">
                        Request for Proposals(Annual)
                      </a>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a href="#">
                        Request for Proposals(Spot Market)
                      </a>
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      <a href="#">
                        Service Level Agreements
                      </a>
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
export default Source;