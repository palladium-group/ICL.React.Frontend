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
                                                {/*<Typography sx={{ fontSize: 10, color:'grey' }}><li>Since June 2022</li> <li>Nairobi, Kenya </li></Typography>*/}
                                            </Grid>
                                        </Grid>
                                        <Grid item md={9}>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Bio Blurb</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2">
                                                    Dan has deep and varied experience designing, leading, improving, and scaling supply chain activities, including having held commercial responsibility for portfolios of over $250 million per year and operational leadership of over $750 million per year across 25 countries. He has experience implementing ICL related requirements having been involved in nearly all aspects of the GHSC-Procurement and Supply Management project including leading its’ largest country office. Dan has practical experience effectivelymanaging complex, large-scale USAID contracts with diverse teams, while ensuring compliance and responsiveness. A former United States Marine, he has an advanced degree and management-related certifications.
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography sx={{ fontWeight: 700, fontSize: 20 }}>Alignment to Project Objectives</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2">
                                                    Dan is Palladium’s Vice President responsible for its Procurement, Logistics, and Supply Chain Management Portfolio, delivering work for public and private clients in the health and defense sectors. He previously acted as a Managing Director, Country Director, Project Director, and subject matter expert on the GHSC-Procurement and Supply Management project. He combines technical expertise with multidisciplinary management skills.

                                                    Dan holds a Master’s in Business Administration as well as an undergraduate degree in political science. He has earned certifications as a Project Management Professional, a Certified Performance Technologist, and a Lean Six Sigma Black Belt from the American Society of Quality.

                                                    After leading teams of 200+ United States Marines and 500+ local staff on all aspects of logistics during his military career, Dan became a supply chain professional in the commercial world, conducting assignments of increasing size on behalf of leading logistics providers. He has experience working in most of the current GHSC countries, including the Nigeria country program.
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
export default Profile;
