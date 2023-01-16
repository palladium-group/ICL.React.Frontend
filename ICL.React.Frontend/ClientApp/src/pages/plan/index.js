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
import FirstImg from "../../vendor/illustration-plan.png";
import {NavLink, Link} from "react-router-dom";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const pageLinks=[
  {
    header: 'Planning Inputs',
    display: 'Quantification Reports',
    href: 'https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118385665/Quantification+Reports',
    enabled: true
  },
  {
    header: 'Planning Inputs',
    display: 'Quarterly Supply Plans',
    href: '',
    enabled: true
  },
  {
    header: 'Planning Inputs',
    display: 'Orders Fulfilled (historical)',
    href: '',
    enabled: true
  },
  {
    header: 'Planning Inputs',
    display: 'Third Party Data Feeds',
    href: '',
    enabled: true
  },
  {
    header: 'Planning Inputs',
    display: 'PSA Inbound Product Monitoring',
    href: '',
    enabled: true
  },
  {
    header: 'Planning Inputs',
    display: 'Customs Requirements',
    href: '',
    enabled: true
  },

  {
    header: 'Order Intake',
    display: 'Orders Received (current)',
    href: '',
    enabled: true
  },
  {
    header: 'Order Intake',
    display: 'Orders Validated (current)',
    href: '',
    enabled: true
  },
  {
    header: 'Monthly Operational Plans',
    display: 'Supply',
    href: '',
    enabled: true
  },
  {
    header: 'Monthly Operational Plans',
    display: 'Demand',
    href: '',
    enabled: true
  },
  {
    header: 'Monthly Operational Plans',
    display: 'Rolling 12-month master plan',
    href: '',
    enabled: true
  }
];

function AreaList(props) {
  const links = pageLinks.filter(x => x.header === props.header);
  const listItems = links.map((link, i) =>
    <Grid key={i} item md={12}>
      {link.display}
      <Divider />
    </Grid>
  );

  return (
    <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
      <Grid container spacing={6}>
        {listItems}
      </Grid>
    </Box>
  );
}


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
        <Grid item md={4} xs={4} px={5} sx={{ marginTop: 10 }}>
          <Paper square={true} sx={{ borderTop: 5, borderTopColor: "red" }} style={{ height: '100%' }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Planning Inputs
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <AreaList header="Planning Inputs" />
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4} px={5} sx={{ marginTop: 10 }}>
          <Paper square={true} sx={{ borderTop: 5, borderTopColor: "red" }} style={{ height: '100%' }}
                 className="fullHeight" height="100" elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Order Intake
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Orders Received (current)
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Orders Validated (current)
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={4} xs={4} px={5} sx={{ marginTop: 10 }}>
          <Paper square={true} sx={{ borderTop: 5, borderTopColor: "red" }} style={{ height: '100%' }} elevation={8}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Monthly Operational Plans
                </Typography>
                <Divider />
                <Spacer mb={4} />
                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      Supply
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Demand
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Cost
                      <Divider />
                    </Grid>
                    <Grid item md={12}>
                      Rolling 12-month master plan
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
