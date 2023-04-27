import React from "react";
import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia,
  Divider as MuiDivider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
// import { orange } from "@mui/material/colors";
import FirstImg from "../../vendor/illustration-plan.png";
import {NavLink, Link} from "react-router-dom";
// import checkPageRoles from "../../components/auth/CheckPageRoles";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

// const allLinks = [
//   {
//     header: "Planning Inputs",
//     visible: true,
//     links: [
//       {
//         header: "Planning Inputs",
//         display: "Quantification Reports",
//         href: "https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118385665/Quantification+Reports",
//         visible: true
//       },
//       {
//         header: "Planning Inputs",
//         display: "Quarterly Supply Plans",
//         href: "",
//         visible: true
//       },
//       {
//         header: "Planning Inputs",
//         display: "Historical Distribution Orders",
//         href: "",
//         visible: true
//       },
//       {
//         header: "Planning Inputs",
//         display: "PSA Inbound Product Monitoring",
//         href: "/plan/psa-inbound-product-monitoring",
//         visible: true
//       },
//       {
//         header: "Planning Inputs",
//         display: "Custom Clearance Monitoring",
//         href: "/plan/customs-clearance",
//         visible: true
//       },
//       {
//         header: "Planning Inputs",
//         display: "Customs Requirements",
//         href: "https://thepalladiumgroup.atlassian.net/servicedesk/customer/portal/26/group/70/create/272",
//         visible: true
//       },
//     ]
//   },
//   {
//     header: "Order Visibility",
//     visible: true,
//     links: [
//       {
//         header: "Order Visibility",
//         display: "Inbound Visibility",
//         href: "/shipment/pos",
//         visible: true,
//       },
//       {
//         header: "Order Visibility",
//         display: "Order Fulfilment",
//         href: "/shipment/pos-validated",
//         visible: true,
//       },
//       {
//         header: "Order Visibility",
//         display: "Orders Received (current)",
//         href: "/customer-orders/pos",
//         visible: true
//       },
//       {
//         header: "Order Visibility",
//         display: "Orders Validated (current)",
//         href: "/customer-orders/pos-validated",
//         visible: true
//       }]
//   },
//   {
//     header: "Operational Planning",
//     visible: true,
//     links: [
//       {
//         header: "Operational Planning",
//         display: "Inventory Planning",
//         href: "",
//         visible: true
//       },
//       {
//         header: "Operational Planning",
//         display: "Distribution Planning",
//         href: "",
//         visible: true
//       },
//       {
//         header: "Operational Planning",
//         display: "Reconciliation & Allocation",
//         href: "",
//         visible: true
//       },
//       {
//         header: "Operational Planning",
//         display: "Cost Estimating",
//         href: "",
//         visible: true
//       },
//       {
//         header: "Operational Planning",
//         display: "Rolling 12-month master plan",
//         href: "",
//         visible: true
//       }
//     ]
//   }
// ];

// const LinkList = props => {
//   const area = allLinks.filter(x => x.header === props.header)[0];
//
//   const pageRoles=area.links.map(a=> ({
//     page: "/plan",
//     header: a.header,
//     display: a.display,
//     href: a.href,
//     visible: a.visible
//   }));
//
//   let accessLinks = [];
//   for (const accessLink of pageRoles) {
//     if (checkPageRoles(accessLink.page, accessLink.header, accessLink.display))
//       accessLinks.push(accessLink);
//   }
//
//   const listItems = accessLinks.map((link, i) =>
//
//     <Grid key={i} item md={12}>
//       {link.href.startsWith("http")?
//         <a href={link.href} target="_blank" rel="noopener noreferrer">
//         {link.display}
//       </a>: (link.href.startsWith("/") ?  <NavLink to={link.href}>
//           {link.display}
//         </NavLink>: <>{link.display}</>)}
//       <Divider />
//     </Grid>
//   );
//
//   return (
//     <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
//       <Grid container spacing={6}>
//         {listItems}
//       </Grid>
//     </Box>
//   );
// };

// const AreaList = () => {
//   const areas = allLinks.filter(x => x.visible === true);
//   const areaList = areas.map((area, i) =>
//         <Grid key={i}  item md={4} xs={4} px={5} sx={{ marginTop: 10 }}>
//         <Paper square={true} sx={{ borderTop: 5, borderTopColor: "red" }} style={{ height: '100%' }}
//                className="fullHeight" height="100" elevation={8}>
//           <Card>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {area.header}
//               </Typography>
//               <Divider />
//               <Spacer mb={4} />
//               <LinkList header={area.header}/>
//             </CardContent>
//           </Card>
//         </Paper>
//       </Grid>
//   );
//
//   return (
//     <Grid container spacing={2} alignItems="stretch">
//       {areaList}
//     </Grid>
//   );
//
// };

const PlanLinks = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid container spacing={2} alignItems="stretch" p={isLgUp ? 12 : 5}>
      <Grid item md={4} style={{display: 'flex'}}>
        <Paper square={true} sx={{ borderTop: 5, borderColor: "#BA0C2F" }} elevation={8}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Planning Inputs
              </Typography>
              <Divider />
              <Spacer mb={4} />
              <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                <Grid container spacing={6}>
                  <Grid item md={12}>
                    <a target="_blank" rel="noopener noreferrer" href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118385665/Quantification+Reports">Quantification Reports</a>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <a href="#">
                      Quarterly Supply Plans
                    </a>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <a href="#">
                      Historical Distribution Orders
                    </a>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/psa-inbound-product-monitoring`}>
                      PSA Inbound Product Monitoring
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/customs-clearance`}>
                      Custom Clearance Monitoring
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/custom-requirements`}>
                      Customs Requirements
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
        <Paper square={true} sx={{ borderTop: 5, borderColor: "#BA0C2F" }} elevation={8}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Order Visibility
              </Typography>
              <Divider />
              <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                <Grid container spacing={1}>
                  <Grid item md={12}>
                    <Card>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Inbound Visibility
                        </Typography>
                        <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                          <Grid container spacing={6}>
                            <Grid item md={12}>
                              <NavLink to={`/shipment/pos`}>
                                Advanced Shipment Notice(ASN)
                              </NavLink>
                              <Divider />
                            </Grid>
                            <Grid item md={12}>
                              <NavLink to={`/shipment/pos-validated`}>
                                Advanced Shipment Notice(ASN) - Validated
                              </NavLink>
                              <Divider />
                            </Grid>
                            <Grid item md={12}>
                              <NavLink to={`/plan/inbound-milestone-monitoring`}>
                                Inbound Milestone Monitoring
                              </NavLink>
                              <Divider />
                            </Grid>
                          </Grid>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                          Order Fulfillment
                        </Typography>
                        <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                          <Grid container spacing={6}>
                            <Grid item md={12}>
                              <NavLink to={`/customer-orders/pos`}>
                                Distribution Order Requests
                              </NavLink>
                              <Divider />
                            </Grid>
                            <Grid item md={12}>
                              <NavLink to={`/customer-orders/pos-validated`}>
                                Distribution Order Requests - Validated
                              </NavLink>
                              <Divider />
                            </Grid>
                            <Grid item md={12}>
                              <NavLink to={`/plan/outbound-milestone-monitoring`}>
                                Outbound Milestone Monitoring
                              </NavLink>
                              <Divider />
                            </Grid>
                          </Grid>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item md={4} style={{display: 'flex'}}>
        <Paper square={true} sx={{ borderTop: 5, borderColor: "#BA0C2F" }} elevation={8}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Operational Planning
              </Typography>
              <Divider />
              <Spacer mb={4} />
              <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                <Grid container spacing={6}>
                  <Grid item md={12}>
                    <NavLink to={`/plan/inventory-on-hand`}>
                      Inventory on Hand
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/inbound-inventory-monitoring`}>
                      Inbound Inventory Monitoring
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/insurance-monitoring`}>
                      Insurance Monitoring and Alerts
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/stock-balancing`}>
                      Stock Balancing
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/historical-orders`}>
                      Historical Orders
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/forecasted-orders`}>
                      Forecasted Orders
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/supply-and-demand`}>
                      Supply and Demand Reconciliation
                    </NavLink>
                    <Divider />
                  </Grid>
                  <Grid item md={12}>
                    <NavLink to={`/plan/delivery-planning`}>
                      Delivery Planning
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
  );
};

const Manage = () => {
  return (
    <React.Fragment>
      <Paper square={true} sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ height: 220, objectFit: "fill" }}
          image={FirstImg}
        />
      </Paper>
      <PlanLinks />
    </React.Fragment>
  );
};
export default Manage;
