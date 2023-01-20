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

const ProfileSeanLockhead = () => {
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
                                            <Avatar alt="Jabu Nyenwa" src="/static/img/avatars/Jabu.png" style={{
                                                border: '0.1px solid lightgray'
                                            }}/>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Jabu Nyenwa</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: 15, color:'orange' }}>Country Programs Director</Typography>
                                                <ListItemIcon style={{ marginTop: 5 }}>
                                                    <PhoneIcon /><Typography sx={{ fontSize: 10, color:'orange', margin: 2 }}> +44 7502220553</Typography>
                                                </ListItemIcon>
                                                <ListItem  key="Email" component="a" href="mailto:jabulani.nyenwa@thepalladiumgroup.com" sx={{padding:'0px'}}>
                                                    <EmailIcon sx={{color:'rgba(0, 0, 0, 0.54)'}}/>
                                                    <Typography variant="h6" sx={{ fontSize: 10, color:'orange', margin: 2 }}>jabulani.nyenwa@thepalladiumgroup.com</Typography>
                                                </ListItem>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Bio</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: 15 }} variant="body2">
                                                    Jabulani “Jabu” Nyenwa has progressed over his 30-year career from a physician in his native Zimbabwe to a leader of some of the largest and most complex integrated health programs in Africa and Asia. As a long-term Palladium senior leader who is passionate about enabling people to access health services, he has implemented health service delivery, systems strengthening, and supply chain management programs in some of the world’s most challenging environments.
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
                                                        In addition to his 5-year career as a physician, Jabu brings 25 years of experience implementing public health programs across HIV; reproductive health; maternal, newborn, child, and adolescent health; and infectious diseases. This includes long-term roles in eight African countries and short-term technical assistance in 15 other low- to middle-income countries (LMICs). He has directly led large health programs in Nigeria with budgets over $100 million. He has managed and mentored country teams implementing health programs valued over $200 million, providing senior technical leadership and managerial oversight and support.                                                       
                                                    </li>
                                                </Typography>
                                                <Typography sx={{ fontSize: 15, color:'grey' }}>
                                                    <li>
                                                        He is a medical doctor who has also earned advanced degrees in public health and business administration. Combined, these degrees provide him with a foundation of technical, strategic, and managerial understanding.
                                                    </li>
                                                </Typography>
                                                <Typography sx={{ fontSize: 15, color:'grey' }}>
                                                    <li>
                                                        Jabu served as the in-country technical lead of USAID|DELIVER in Zimbabwe and has implemented several stand-alone supply chain activities, integrating them into broader health programs. His leadership during the transition of two incumbent health programs to Palladium was recognized by the client as being “commendably seamless” and without any gap in support. He also served as HQ Project Director for 10+ donorfunded health and development programs across Africa, supporting country teams to manage for results while meeting client expectations and requirements.
                                                    </li>
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
export default ProfileSeanLockhead;
