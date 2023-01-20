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
    ListItemIcon,ListItem
} from "@mui/material";

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import PhoneIcon from '@mui/icons-material/Phone';

import styled from "@emotion/styled";
import {spacing} from "@mui/system";
// import { orange } from "@mui/material/colors";
import FirstImg from "../../vendor/illustration-manage.png";
import {NavLink} from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import async from "../../components/Async";
import BannerContent from "./HomeBanner";


const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 80px;
  width: 80px;
`;
const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const ProfileMarilynNoguera = () => {
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
                                            <Avatar alt="Marilyn Noguera" src="/static/img/avatars/Marilyn.png" style={{
                                                border: '0.1px solid lightgray'
                                            }}/>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Marilyn Noguera</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: 15, color:'orange' }}>Deputy Project Director</Typography>
                                                <ListItemIcon style={{ marginTop: 5 }}>
                                                        <PhoneIcon /><Typography sx={{ fontSize: 10, color:'orange', margin: 2 }}>+1 202-468-6149</Typography>
                                                </ListItemIcon>
                                                <ListItem  key="Email" component="a" href="mailto:marilyn.noguera@thepalladiumgroup.com" sx={{padding:'0px'}}>
                                                    <EmailIcon sx={{color:'rgba(0, 0, 0, 0.54)'}}/>
                                                    <Typography variant="h6" sx={{ fontSize: 10, color:'orange', margin: 2 }}>marilyn.noguera@thepalladiumgroup.com</Typography>
                                                </ListItem>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Bio</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" sx={{ fontSize: 15 }}>
                                                    Marilyn has worked at both the country and HQ levels, combining practical delivery with vision, strategy, and technical leadership to consistently achieve results. Having served as a senior technical adviser with JSI, PATH, and Palladium, her work on previous iterations of GHSC includes delivering global technical leadership, five years leading the Mozambique program, overseeing implementation in Nigeria, and providing technical assistance to 20 countries. A highly respected, innovative, and decisive leader, she stands out for her ability to match technical strategies with practical, cutting-edge commercial solutions that meet on-the-ground needs.
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
                                                        Marilyn has over 20 years’ experience setting and applying health supply chain best practices globally and has led high-performing, multidisciplinary, cross-cultural teams of 15 to 150 staff, both in-country and at HQ. As Global Program Manager in Nigeria, she successfully transitioned to a new USAID contractor while handling non-performing subcontractors and managing compliance and risk for $60 million in health commodities across 10 locations.                                                    
                                                    </li>
                                                </Typography>
                                                <Typography sx={{ fontSize: 15, color:'grey' }}>
                                                    <li>
                                                        With degrees in business administration, sociology, and Frenbusiness and development management. She works equally well Spanish, and can communicate proficiently in Portuguese.                                                     
                                                    </li>
                                                </Typography>
                                                <Typography sx={{ fontSize: 15, color:'grey' }}>
                                                    <li>
                                                        With a career primarily devoted to supply chain management, Marilyn has led multimillion-dollar programs ensuring quality, compliance, and financial responsibility in ten countries. She worked on the Supply Chain Management System project for seven years at
                                                        both the country and HQ levels and became a go-to resource for trainings on topics ranging  from organizational culture to strategic health program quality improvement.
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
export default ProfileMarilynNoguera;
