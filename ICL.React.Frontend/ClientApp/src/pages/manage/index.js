import React from "react";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";

const Card = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Manage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
                    {/*<Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />*/}
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
    </React.Fragment>
  );
};
export default Manage;
