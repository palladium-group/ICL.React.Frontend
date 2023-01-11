import React from "react";
import {Helmet} from "react-helmet-async";
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard, CardActionArea, CardActions, CardContent,
  CardMedia as MuiCardMedia,
  Divider as MuiDivider,
  Grid, Link, Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import { Icon } from '@iconify/react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import FirstImg from "../../../src/vendor/Cambodia_USAID_original.jpg";
import SecondImg from "../../../src/vendor/Set B 030.jpg";
import ThirdImg from "../../../src/vendor/Set B 019.jpg";

const Card = styled(MuiCard)(spacing);

const Button = styled(MuiButton)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Helmet title="Home" />
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={1}
                  src={FirstImg}
                  alt='...'
                  height={400}
                >
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={2}
                  src={SecondImg}
                  alt='...'
                  height={400}
                >
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                  className='w-100 d-block'
                  itemId={3}
                  src={ThirdImg}
                  alt='...'
                  height={400}
                >
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
              </MDBCarousel>
            </Grid>
            <Grid item md={12}>
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue"',
                  fontSize: 15,
                  fontWeightBold: "bold",
                  // text-align: left;
                  color: "#266662",
                }}
              >
                Our Strategy
              </Typography>
            </Grid>
            <Grid
              item
              md={12}
              sx={{
                margin: "19px 125px 31px 82px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item md={2}>
                  <Box
                    sx={{
                      '& > :not(style) + :not(style)': {
                        ml: 2,
                      },
                      textAlign: "center"
                    }}>
                    <Icon icon="fluent:brain-circuit-20-regular" style={{ fontSize: '32px', color: "#A49382" }} />
                    <Typography>NextGen ICL Strategy</Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box
                    sx={{
                      '& > :not(style) + :not(style)': {
                        ml: 2,
                      },
                      textAlign: "center"
                    }}>
                    <Icon icon="bi:graph-up-arrow" style={{ fontSize: '32px', color: "#A49382" }}></Icon>
                    <Typography>Results Framework</Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box
                    sx={{
                      '& > :not(style) + :not(style)': {
                        ml: 2,
                      },
                      textAlign: "center"
                    }}>
                    <Icon icon="iconoir:submit-document" style={{ fontSize: '32px', color: "#A49382" }}></Icon>
                    <Typography>HQ Work Plan</Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box
                    sx={{
                      '& > :not(style) + :not(style)': {
                        ml: 2,
                      },
                      textAlign: "center"
                    }}>
                    <Icon icon="mdi:office-building-marker-outline" style={{ fontSize: '32px', color: "#A49382" }}></Icon>
                    <Typography>Country Office Work Plans</Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box
                    sx={{
                      '& > :not(style) + :not(style)': {
                        ml: 2,
                      },
                      textAlign: "center"
                    }}>
                    <Icon icon="material-symbols:play-circle-outline-rounded" style={{ fontSize: '32px', color: "#A49382" }}></Icon>
                    <Typography>4PL Playbook</Typography>
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box
                    sx={{
                      '& > :not(style) + :not(style)': {
                        ml: 2,
                      },
                      textAlign: "center"
                    }}>
                    <Icon icon="academicons:ideas-repec" style={{ fontSize: '32px', color: "#A49382" }}></Icon>
                    <Typography>4PL Body of Knowledge</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue"',
                  fontSize: 15,
                  fontWeightBold: "bold",
                  // text-align: left;
                  color: "#266662",
                }}
              >
                Success Stories
              </Typography>
              <Typography component="p" sx={{ fontSize: 10 }}>
                Sit illum aperiam et aliquam maiores aut nulla autem ab ratione sunt.
                In assumenda dolorem ut autem vitae et eveniet eveniet ad maxime laudantium.
                Est ipsa dolores sit minus numquam qui doloremque voluptatem.
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography
                sx={{
                  fontFamily: '"Helvetica Neue"',
                  fontSize: 15,
                  fontWeightBold: "bold",
                  // text-align: left;
                  color: "#266662",
                }}
              >
                Leadership Profiles
              </Typography>
              <Typography component="p" sx={{ fontSize: 10 }}>
                Sit illum aperiam et aliquam maiores aut nulla autem ab ratione sunt.
                In assumenda dolorem ut autem vitae et eveniet eveniet ad maxime laudantium.
                Est ipsa dolores sit minus numquam qui doloremque voluptatem.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Card
                mb={6}
                sx={{
                  backgroundColor: "#266662",
                  color: "#fff",
                }}
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

            <Grid item md={12}>
              <Card
                mb={6}
                sx={{
                  backgroundColor: "#266662",
                  color: "#fff",
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

            <Grid item md={12}>
              <Card
                mb={6}
                sx={{
                  backgroundColor: "#266662",
                  color: "#fff",
                }}
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
      </Grid>
    </React.Fragment>
  );
};
export default Home;