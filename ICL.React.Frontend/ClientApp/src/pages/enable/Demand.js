import React from "react";
import {
  Card as MuiCard,
  CardMedia, Divider, Grid, Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/kpmg-demand.png";
import FirstImg2 from "../../vendor/kpmg-demand2.png";
import {Helmet} from "react-helmet-async";
import {useNavigate} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button as MuiButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ReplyIcon from '@mui/icons-material/Reply';
const Card = styled(MuiCard)(spacing);
const Button = styled(MuiButton)(spacing);

const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#05C3DE",
    },
  },
});

const Demand = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container p={isLgUp ? 12 : 5}>
      <Grid item md={12}>
        <Helmet title="Demand" />
        <ThemeProvider theme={themeCustom}>
          <Button
            mr={2}
            variant="contained"
            color="secondary"
            onClick={() => navigate("/enable")}
          >
            <ReplyIcon />
          </Button>
        </ThemeProvider>
        <br />
        <Typography variant="h3" gutterBottom display="inline">
          Digital Twins / Demand
        </Typography>
        <Divider my={6} />
        <Grid container spacing={2} alignItems="stretch">
          <Grid item md={12}  xs={12}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                sx={{ height: 550 }}
                image={FirstImg}
              />
            </Card>
          </Grid>

          <Grid item md={12}  xs={12} sx={{ marginTop: 20 }}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                sx={{ height: 550 }}
                image={FirstImg2}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Demand;