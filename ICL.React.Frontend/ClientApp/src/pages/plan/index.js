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
import checkPageRoles from "../../components/auth/CheckPageRoles";
import CheckRol from "../../components/auth/CheckRoles";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const allLinks = [
  {
    header: "Planning Inputs",
    visible: true,
    links: [
      {
        header: "Planning Inputs",
        display: "Quantification Reports",
        href: "https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118385665/Quantification+Reports",
        visible: true
      },
      {
        header: "Planning Inputs",
        display: "Quarterly Supply Plans",
        href: "",
        visible: true
      },
      {
        header: "Planning Inputs",
        display: "Orders Fulfilled (historical)",
        href: "",
        visible: true
      },
      {
        header: "Planning Inputs",
        display: "Third Party Data Feeds",
        href: "",
        visible: true
      },
      {
        header: "Planning Inputs",
        display: "PSA Inbound Product Monitoring",
        href: "",
        visible: true
      },
      {
        header: "Planning Inputs",
        display: "Customs Requirements",
        href: "",
        visible: true
      }]
  },
  {
    header: "Order Intake",
    visible: true,
    links: [
      {
        header: "Order Intake",
        display: "Orders Received (current)",
        href: "",
        visible: true
      },
      {
        header: "Order Intake",
        display: "Orders Validated (current)",
        href: "",
        visible: true
      }]
  },
  {
    header: "Monthly Operational Plans",
    visible: true,
    links: [
      {
        header: "Monthly Operational Plans",
        display: "Supply",
        href: "",
        visible: true
      },
      {
        header: "Monthly Operational Plans",
        display: "Demand",
        href: "",
        visible: true
      },
      {
        header: "Monthly Operational Plans",
        display: "Rolling 12-month master plan",
        href: "",
        visible: true
      }
    ]
  }
];

const LinkList = props => {
  const area = allLinks.filter(x => x.header === props.header)[0];

  const pageRoles=area.links.map(a=> ({
    page: "/plan",
    header: a.header,
    display: a.display,
    href: a.href,
    visible: a.visible
  }));

  let accessLinks = [];
  for (const accessLink of pageRoles) {
    if (checkPageRoles(accessLink.page, accessLink.header, accessLink.display))
      accessLinks.push(accessLink);
  }

  console.log(accessLinks)

  const listItems = accessLinks.map((link, i) =>

    <Grid key={i} item md={12}>
      {link.href.startsWith("http")?
        <a href={link.href} target="_blank" rel="noopener noreferrer">
        {link.display}
      </a>:  <NavLink to={link.href}>
          {link.display}
        </NavLink>}

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
};

const AreaList = () => {
  const areas = allLinks.filter(x => x.visible === true);
  const areaList = areas.map((area, i) =>
        <Grid key={i}  item md={4} xs={4} px={5} sx={{ marginTop: 10 }}>
        <Paper square={true} sx={{ borderTop: 5, borderTopColor: "red" }} style={{ height: '100%' }}
               className="fullHeight" height="100" elevation={8}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {area.header}
              </Typography>
              <Divider />
              <Spacer mb={4} />
              <LinkList header={area.header}/>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
  );

  return (
    <Grid container spacing={2} alignItems="stretch">
      {areaList}
    </Grid>
  );

};



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
      <AreaList/>
    </React.Fragment>
  );
};
export default Manage;
