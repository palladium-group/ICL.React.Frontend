import React from "react";
import {
    Avatar as MuiAvatar,
    Box,
    Card as MuiCard,
    CardContent as MuiCardContent, CardMedia,
    Divider as MuiDivider,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
// import { orange } from "@mui/material/colors";
import FirstImg from "../../vendor/illustration-manage.png";
import {NavLink} from "react-router-dom";


const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 80px;
  width: 80px;
`;
const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Profile = () => {
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
                <Grid item md={12}  xs={12} px={5} sx={{marginTop:10}}>
                    <Paper square={true} sx={{ borderTop: 5,borderTopColor:"orange" }} elevation={8}>
                        <Card>
                            <CardContent>                                
                                <Divider />
                                <Spacer mb={4} />
                                <Box px={4} my={3} sx={{ fontSize: 17, color: "#333333" }}>
                                    <Grid container spacing={12}>
                                        <Grid item md={3}>
                                            <Avatar alt="Dan Rhodes" src="/static/img/avatars/dan.png" />
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Dan Rhodes</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontSize: 15, color:'orange' }}>Project Director</Typography>
                                                <Typography sx={{ fontSize: 10, color:'grey' }}><li>Since June 2022</li> <li>Nairobi, Kenya </li></Typography>

                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>History</Typography>
                                            </Grid>
                                            <Grid item>
                                                I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
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
export default Profile;
