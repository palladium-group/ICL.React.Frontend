import React from "react";
import {Helmet} from "react-helmet-async";
import {
  Avatar as MuiAvatar,
  Card as MuiCard,
  CardActionArea,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Grid,
  // Link,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Tab,
  TextField,
  // Container,
  CardMedia,
  Stack, Chip
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import FirstImg from "../../../src/vendor/illustration-1.png";
import SecondImg from "../../../src/vendor/illustration-2.png";
import ThirdImg from "../../../src/vendor/illustration-3.png";
import SuccessCovid from "../../../src/vendor/success-covid.png";
import SuccessData from "../../../src/vendor/success-data.png";
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchIcon from '@mui/icons-material/Search';
import {NavLink} from "react-router-dom";
import async from "../../components/Async";
const BannerContent = async(() => import("./HomeBanner"));


const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 80px;
  width: 80px;
`;


const HeaderContent=()=> {
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card mb={2} square={true}>
          <CardContent>
            <Paper elevation={3}>
              <Typography sx={{ fontSize: 28 }}>
                Strategy & Key References
              </Typography>
              <Divider />
              <br />
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} alignItems="stretch">
                  <Grid item xs>
                    <Card sx={{ height:90,  backgroundColor: "#333333" }}>
                      <CardContent>
                        <Typography variant="body2" sx={{ fontSize: 18, textAlign: 'center',color:'white' }}>
                          <a style={{ color: "white" }} href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2119794707/Nextgen+ICL+strategy" target="_blank" rel="noopener noreferrer">NEXTGEN ICL
                            STRATEGY
                          </a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card sx={{ height:90, backgroundColor: "#333333" }}
                          style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 18, textAlign: 'center',color:'white' }}>
                          <a style={{ color: "white" }} href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2119794714/Results+framework" target="_blank" rel="noopener noreferrer">RESULTS FRAMEWORK</a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card sx={{ height:90,backgroundColor: "#333333" }}
                          style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 18, textAlign: 'center',color:'white' }}>
                          <a style={{ color: "white" }} href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2119696749/HQ+workplan" target="_blank" rel="noopener noreferrer">HQ WORK PLAN</a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card sx={{ height:90, backgroundColor: "#333333" }}
                          style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 18, textAlign: 'center',color:'white' }}>
                          <a style={{ color: "white" }} href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2119499829/Country+office+workplan" target="_blank" rel="noopener noreferrer">COUNTRY OFFICE WORK
                            PLANS</a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card sx={{ height:90, backgroundColor: "#333333" }}
                          style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 18, textAlign: 'center',color:'white' }}>
                          <a style={{ color: "white" }} href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2119630939/4PL+Play+book" target="_blank" rel="noopener noreferrer">4PL PLAYBOOK</a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs>
                    <Card sx={{ height:90, backgroundColor: "#333333" }}
                          style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 18, textAlign: 'center',color:'white' }}>
                          <a style={{ color: "white" }} href="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2120155137/4PL+Body+of+knowledge" target="_blank" rel="noopener noreferrer">4PL BODY OF KNOWLEDGE</a>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </CardContent>
        </Card>
      </Paper>
    </Box>)
}
const EventContent=({value,handleChange})=>{
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ height:500 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Events
              </Typography>
              <Divider />
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList  onChange={handleChange}  aria-label="lab API tabs example">
                      <Tab label="Upcoming" value="1" />
                      <Tab label="Past" value="2" />
                    </TabList>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="Search" variant="standard" />
                  </Box>
                  <TabPanel value="1">
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="NextGen IP Working Group (ICL + PSAs)"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <PlaceIcon />
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="Microsoft Teams"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <CalendarMonthIcon/>
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="Feb 6, 2023"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <AccessTimeIcon/>
                        </ListItemIcon>
                        <ListItemButton>
                          <ListItemText primary="0900 EST"></ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </TabPanel>
                  <TabPanel value="2">No Events</TabPanel>
                </TabContext>
              </Box>



              {/*Sample Event 1:*/}
              {/*Event name: NextGen IP Working Group (ICL + PSAs)*/}
              {/*Event location: Microsoft Teams*/}
              {/*(Optional) Event description: Quarterly Supply Meeting*/}
              {/*Date: Jan 27, 2023*/}
              {/*Time: 0900 EST*/}

              {/*Sample Event 2:*/}
              {/*Event name: Monthly MIS Systems Maintenance and Review Meeting*/}
              {/*Event location: NextGen ICL HQ Office*/}
              {/*(Optional) Event description: HQ + Country Office MIS Leads*/}
              {/*Date: Feb 6, 2023*/}
              {/*Time: 1100 EST*/}

              {/*Sample Event 3:*/}
              {/*Event name: Quarterly Progress Report Inputs*/}
              {/*Event location: N/A- Via Email*/}
              {/*(Optional) Event description: All Team Leaders to review and finalize QPR reviews*/}
              {/*Date: Mar 10, 2023*/}
              {/*Time: 1700 EST*/}

            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>)
}
const YammerContent=()=> {
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ height:500 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Yammer Feed
              </Typography>
              <Divider />
              <Typography component="p">
                <iframe
                  name="embed-feed"
                  title="Yammer"
                  src="https://web.yammer.com/embed/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMjU0NzQ4NjUxNTIifQ?header=false&footer=false&theme=light&includeFeedInformation=true"    style={{ border: "0px", overflow: "hidden", width: "100%", height: "100%", minHeight: "400px" }}></iframe>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>)
}

const QuickLinksContent=()=>{
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ height:500 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Quick Links
              </Typography>
              <Divider />
              <Stack direction="row" spacing={2} sx={{ marginBottom: 2, marginTop: 2 }}>
                <Chip label="Timesheet" component="a" target="_blank" href="https://thepalladiumgroup-cp.deltekenterprise.com/cpweb/" clickable />
                <Chip label="Expense Reports" component="a" target="_blank" href="https://delegationofauthority.thepalladiumgroup.com/" clickable />
                <Chip label="Travel Reports" component="a" target="_blank" href="https://delegationofauthority.thepalladiumgroup.com/" clickable />
              </Stack>
              <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
                <Chip label="HR Portal" component="a" target="_blank" href="https://hrcompass.thepalladiumgroup.com/" clickable />
                <Chip label="Learning Compass" component="a" target="_blank" href="https://palladium.blackboard.com/" clickable />
              </Stack>
              <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
                <Chip label="Compliance" component="a" target="_blank" href="https://thepalladiumgroup-cp.deltekenterprise.com/cpweb/" clickable />
                <Chip label="Training" component="a" />
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>)
}
const SuccessContent=()=> {
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ display: 'flex' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Our Impact
            </Typography>
            <Divider />
            <Spacer mb={4} />
            <Box sx={{p:2}} border={1} borderColor="lightgrey">
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image={SuccessCovid}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      DHSC Framework
                    </Typography>
                    <Typography variant="body2" component="div">
                      Our platform is one of a select few service providers supporting the UK Government’s short and long-term distribution of medical devices, consumables, reagents, and equipment across the country. The platform manages the storage of goods, provides a secure and user-friendly ordering system, and a means to collect payments in a UK primary care setting. Additionally, with ISO9000 certification for warehousing and 1so9001 for provision of customer-focused activities, the team can distribute medical devices and more to NHS centres, hospitals, and GP surgeries.
                      We provide an adaptive and scalable approach to resource management and a solution that can flex in real time in response to the volume and pace of demand for goods.

                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
            <Box sx={{p:2}} border={1} borderColor="lightgrey">
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300 }}
                  image={SuccessData}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      Global Fund
                    </Typography>
                    <Typography variant="body2" component="div">
                      Across 22 countries and with data from 800 health facilities, we support The Global Fund to embed a culture of performance management in each country’s health supply chains. We routinely track indicators for on-shelf availability, on-time-in-full delivery, commodities stocked according to plan, and timeliness of facility’s reporting to the LMIS. Our analyses support health programs and the ability of supply chain actors to monitor needs, identify risks, and track trends in individual country logistics operations to help inform systems strengthening priorities.
                      By supporting national program managers in monitoring the availability of essential health commodities and services at different points in the system, we have created an in-depth understanding of whether and how health facilities have adapted to the challenges of COVID-19.
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Box>)
}
const LeadershipContent=()=> {
  return (
    <Box>
      <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
        <Card sx={{ display: 'flex' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Leadership Profiles
            </Typography>
            <Divider />
            <Spacer mb={4} />
            <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
              <Grid item md={3}>
                <Avatar alt="Dan Rhodes" src="/static/img/avatars/dan.png" />
              </Grid>
              <Grid item md={8} mx={3}>
                <Grid container direction="column" alignItems="left" mb={2}>
                  <NavLink to={`/dan-rhodes`}>
                    <Grid item>
                      <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Dan Rhodes</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: 18 }}>Project Director</Typography>
                    </Grid>
                  </NavLink>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
            <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
              <Grid item md={3}>
                <Avatar alt="Marilyn Noguera" src="/static/img/avatars/Marilyn.png" />
              </Grid>
              <Grid item md={8} mx={3}>
                <NavLink to={`/marilyn-noguera`}>
                  <Grid container direction="column" alignItems="left" mb={2}>
                    <Grid item>
                      <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Marilyn Noguera</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: 18 }}>Deputy Project Director</Typography>
                    </Grid>
                  </Grid>
                </NavLink>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
              <Grid item md={3}>
                <Avatar alt="Jabu Nyenwa" src="/static/img/avatars/Jabu.png" />
              </Grid>
              <Grid item md={8} mx={3}>
                <Grid container direction="column" alignItems="left" mb={2}>
                  <NavLink to={`/jabu-nyenwa`}>
                    <Grid item>
                      <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Jabu Nyenwa</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: 18 }}>Country Programs Director</Typography>
                    </Grid>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" alignItems="center" mb={2} spacing={12}>
              <Grid item md={3}>
                <Avatar alt="Sean Lockhead" src="/static/img/avatars/Sean.png" />
              </Grid>
              <Grid item md={8} mx={3}>
                <Grid container direction="column" alignItems="left" mb={2}>
                  <NavLink to={`/sean-lockhead`}>
                    <Grid item>
                      <Typography sx={{ fontWeight: 700, fontSize: 18 }}>Sean Lockhead</Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: 18 }}>Management, Information & Results Director</Typography>
                    </Grid>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Box>)
}



const Home = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Helmet title="Home" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BannerContent/>
        </Grid>
      </Grid>
      <Grid container spacing={2} p={isLgUp ? 12 : 5}>
        <Grid item xs={12}>
          <HeaderContent/>
        </Grid>
        <Grid container direction="row" alignItems="stretch" spacing={2}>
          <Grid item xs={4}>
            <EventContent value={value} handleChange={handleChange}/>
          </Grid>
          <Grid item xs={4}>
            <YammerContent/>
          </Grid>
          <Grid item xs={4}>
            <QuickLinksContent/>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="stretch" spacing={2}>
          <Grid item xs={8} sx={{ display: 'flex' }}>
            <SuccessContent/>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex' }}>
            <LeadershipContent/>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Home;
