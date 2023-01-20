import React from "react";
import {
    Avatar as MuiAvatar,
    Box,
    Card as MuiCard,
    CardContent as MuiCardContent, CardMedia,
    Divider as MuiDivider,
    Grid,
    Paper,
    Typography,
    ListItemIcon, ListItem
} from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import PhoneIcon from '@mui/icons-material/Phone';
import BannerContent from "./HomeBanner";

import styled from "@emotion/styled";
import {spacing} from "@mui/system";
// import { orange } from "@mui/material/colors";
import FirstImg from "../../vendor/illustration-manage.png";
import {NavLink} from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import async from "../../components/Async";


const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 80px;
  width: 80px;
`;
const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const ProfileDanRhodes = () => {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <BannerContent/>
            </Grid>
            <br />
            <Grid container spacing={2} alignItems="stretch">
                <Grid item md={12}  xs={12} px={5} sx={{marginTop:10}}>
                    <Paper square={true} sx={{ borderTop: 5,borderTopColor:"black" }} elevation={8}>
                        <Card>
                            <CardContent>                              
                                
                                <Spacer mb={4} />
                                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                                    <Grid container spacing={12}>
                                        <Grid item md={3}>
                                            <Avatar alt="Sean Lockhead" src="/static/img/avatars/Sean.png" style={{
                                                border: '0.1px solid lightgray'
                                            }}/>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Sean Lockhead</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: 15, color:'orange' }}>Management, Information & Results Director</Typography>
                                                <ListItemIcon style={{ marginTop: 5 }}>
                                                    <PhoneIcon /><Typography sx={{ fontSize: 10, color:'orange', margin: 2 }}> + 1 609-947 2629</Typography>
                                                </ListItemIcon>                                               
                                                <ListItem  key="Email" component="a" href="mailto:sean.lockhead@thepalladiumgroup.com" sx={{padding:'0px'}}>
                                                    <EmailIcon sx={{color:'rgba(0, 0, 0, 0.54)'}}/>
                                                    <Typography variant="h6" sx={{ fontSize: 10, color:'orange', margin: 2 }}>sean.lockhead@thepalladiumgroup.com</Typography>
                                                </ListItem>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Bio</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: 15 }} variant="body2">
                                                    Sean was a key architect and thought leader for GS1, the gold standard for supply chain data interoperability, which has been vital to creating efficiencies in supply chain management. He is a technical and business leader with over 30 years of international experience, including on USAID global health supply chain activities. Sean has continuously demonstrated excellence in strategic planning, operational execution, product management, global standards development and implementation, and transaction-based supply chain initiatives.
                                                </Typography>
                                            </Grid>
                                        </Grid>                                       
                                    </Grid>
                                </Box>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
               
            </Grid>
            <Grid container spacing={2} alignItems="stretch">
                <Grid item md={12}  xs={12} px={5} sx={{marginTop:10}}>
                    <Paper square={true} sx={{ borderTop: 5,borderTopColor:"black" }} elevation={8}>
                        <Card>
                            <CardContent>
                                
                                <Spacer mb={4} />
                                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                                    <Grid container spacing={12}>                                        
                                        <Grid item md={12}>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Alignment to Project Objectives</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: 15, color:'grey' }}>
                                                    <li>
                                                        Sean is an innovative technology leader who creates and manages information systems to improve efficiency and reliability. With expertise in data management, he provided LIT expertise on the GHSC-Procurement and Supply Management project to improve health supply chain processes. His leadership experience includes guiding teams of experts overseeing 112 country offices worldwide.
                                                    </li>
                                                </Typography>
                                                <Typography sx={{ fontSize: 15, color:'grey' }}>
                                                    <li>
                                                        Sean has supplemented his graduate education in electrical engineering with over 14 certifications in leadership, management, design thinking, and teamwork from leading academic institutions and associations across the globe.                                                      </li>
                                                </Typography>
                                                <Typography sx={{ fontSize: 15, color:'grey' }}>
                                                    <li>
                                                        His 30+ years’ experience in implementing country-specific data management systems in  both United States and LMIC settings has allowed him to create adaptive solutions to meet country needs that are tested, International Organization for Standardization-certified,and USAID-compliant. Having supported over 30 countries under the GHSC Procurement and Supply Management project, and has a deep understanding of the intersection of logistics, technology, and global health.                                                    </li>
                                                </Typography>
                                            </Grid>
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
export default ProfileDanRhodes;
