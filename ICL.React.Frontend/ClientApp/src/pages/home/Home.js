import React from "react";
import {Helmet} from "react-helmet-async";
import {
  Avatar as MuiAvatar,
  Card as MuiCard,
  CardActionArea,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import FirstImg from "../../../src/vendor/illustration-1.png";
import SecondImg from "../../../src/vendor/illustration-2.png";
import ThirdImg from "../../../src/vendor/illustration-3.png";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 50px;
  width: 50px;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Helmet title="Home" />
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={1}
                  src={FirstImg}
                  alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={2}
                  src={SecondImg}
                  alt='...'
                >
                </MDBCarouselItem>

                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={3}
                  src={ThirdImg}
                  alt='...'
                >
                </MDBCarouselItem>
              </MDBCarousel>
            </Grid>
            <Grid item md={12}>
              <Card mb={2} sx={{ borderTop: 5 }} variant="outlined" square={false}>
                <CardContent>
                  <Paper elevation={3}>
                    <Typography sx={{ fontSize: 28 }}>
                      Strategy & Key References
                    </Typography>
                    <Divider />
                    <br />
                    <Grid direction="row" justifyContent="center" container spacing={2} alignItems="stretch">
                      <Grid item md={2} style={{display: 'flex'}}>
                        <Card sx={{ backgroundColor: "#05C3DE" }}>
                          <CardContent>
                            <Typography variant="body2" sx={{ fontSize: 18, alignContent: 'center' }}>NEXTGEN ICL STRATEGY</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item md={2} style={{display: 'flex'}}>
                        <Card sx={{ backgroundColor: "#BA0C2F" }} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                          <CardContent>
                            <Typography sx={{ fontSize: 18 }}>RESULTS FRAMEWORK</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item md={2} style={{display: 'flex'}}>
                        <Card sx={{ backgroundColor: "#64A70B" }} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                          <CardContent>
                            <Typography sx={{ fontSize: 18 }}>HQ WORK PLAN</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item md={2} style={{display: 'flex'}}>
                        <Card sx={{ backgroundColor: "#64A70B" }} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 18 }}>COUNTRY OFFICE WORK PLANS</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item md={2} style={{display: 'flex'}}>
                        <Card sx={{ backgroundColor: "#8D6E97" }} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                          <CardContent>
                            <Typography sx={{ fontSize: 18 }}>4PL PLAYBOOK</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item md={2} style={{display: 'flex'}}>
                        <Card sx={{ backgroundColor: "#8D6E97" }} style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                          <CardContent>
                            <Typography sx={{ fontSize: 18 }}>4PL BODY OF KNOWLEDGE</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Paper>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Card
                mb={6}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Events
                    </Typography>
                    <Divider />
                    <Typography component="p" sx={{ fontSize: 10 }}>
                      Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                      quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                      quam nunc, blandit vel, luctus pulvinar.
                    </Typography>

                    <Typography component="p" sx={{ fontSize: 10 }}>
                      Sit illum aperiam et aliquam maiores aut nulla autem ab ratione sunt.
                      In assumenda dolorem ut autem vitae et eveniet eveniet ad maxime laudantium.
                      Est ipsa dolores sit minus numquam qui doloremque voluptatem.
                    </Typography>

                    <Typography component="p" sx={{ fontSize: 10 }}>
                      33 distinctio nisi est tempore perspiciatis est assumenda galisum id
                      fugit alias ut nulla distinctio est voluptas dolorem et doloribus internos.
                      Et quasi impedit sed nemo quidem qui harum ullam sit quia iure.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                mb={6}
                sx={{
                  maxHeight: 210,
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Yammer Feed
                    </Typography>
                    <Divider />
                    <Typography component="p">
                      <iframe name="embed-feed" title="Yammer" src="https://web.yammer.com/embed/feed?header=false&footer=false&theme=dark" style={{ border: "0px", overflow: "hidden", width: "100%", height: "100%", minHeight: "400px" }}></iframe>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card
                mb={6}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Quick Links
                    </Typography>
                    <Divider />
                    <ul>
                      <li><Link href="#">Timesheet</Link></li>
                      <li><Link href="#">Expense Reports</Link></li>
                      <li><Link href="#">Travel Reports</Link></li>
                      <li><Link href="#">HR Portal</Link></li>
                      <li><Link href="#">Training</Link></li>
                      <li><Link href="#">Learning Compass</Link></li>
                    </ul>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Success stories
                    </Typography>
                    <Divider />
                    <Grid container direction="column" alignItems="left" mb={2} spacing={2}>
                      <Grid item>
                        <Card>
                          <CardContent>
                            <Grid container alignItems="left" mb={2} spacing={2}>
                              <Grid item md={4}>
                                gg
                              </Grid>
                              <Grid item md={8}>
                                <Card>
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Title of the story
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                      Lorem ipsum dolor sit amet, consectetuer adipiscing
                                      elit, sed diam nonummy nibh euismod tincidunt ut
                                      laoreet dolore magna aliquam erat volutpat. Ut wisi
                                      enim ad minim veniam, quis nostrud exerci tation
                                      ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                      <Grid item>
                        <Card>
                          <CardContent>
                            <Grid container alignItems="left" mb={2} spacing={2}>
                              <Grid item md={4}>
                                gg
                              </Grid>
                              <Grid item md={8}>
                                <Card>
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Title of the story
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                      Lorem ipsum dolor sit amet, consectetuer adipiscing
                                      elit, sed diam nonummy nibh euismod tincidunt ut
                                      laoreet dolore magna aliquam erat volutpat. Ut wisi
                                      enim ad minim veniam, quis nostrud exerci tation
                                      ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Paper square={true} sx={{ borderTop: 5 }} elevation={8}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Leadership Profiles
                    </Typography>
                    <Divider />
                    <Spacer mb={4} />
                    <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                      <Grid item md={3}>
                        <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />
                      </Grid>
                      <Grid item md={9}>
                        <Grid container direction="column" alignItems="left" mb={2}>
                          <Grid item>
                            Dan Rhodes
                          </Grid>
                          <Grid item>
                            Project Director
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                      <Grid item md={3}>
                        <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />
                      </Grid>
                      <Grid item md={9}>
                        <Grid container direction="column" alignItems="left" mb={2}>
                          <Grid item>
                            Marilyn Noguera
                          </Grid>
                          <Grid item>
                            Deputy Project Director
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                      <Grid item md={3}>
                        <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />
                      </Grid>
                      <Grid item md={9}>
                        <Grid container direction="column" alignItems="left" mb={2}>
                          <Grid item>
                            Jabu Nyenwa
                          </Grid>
                          <Grid item>
                            Country Programs Director
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" mb={2} spacing={2}>
                      <Grid item md={3}>
                        <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />
                      </Grid>
                      <Grid item md={9}>
                        <Grid container direction="column" alignItems="left" mb={2}>
                          <Grid item>
                            Sean Lockhead
                          </Grid>
                          <Grid item>
                            Management, Information & Results Director
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Home;