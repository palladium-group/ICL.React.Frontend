import React from "react";
import {
  Card as MuiCard,
  CardMedia, Divider, Grid, Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";
import FirstImg from "../../vendor/kpmg-deliver.png";
import {Helmet} from "react-helmet-async";
import ReplyIcon from "@mui/icons-material/Reply";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import {
  Button as MuiButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const Button = styled(MuiButton)(spacing);
const Card = styled(MuiCard)(spacing);

const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#05C3DE",
    },
  },
});

const Deliver = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container p={isLgUp ? 12 : 5}>
      <Grid item md={12}>
        <Helmet title="Formik" />
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
          Digital Twins / Deliver
        </Typography>
        <Divider my={6} />
        <Grid container spacing={2}>
          <Grid item md={12}  xs={12}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                sx={{ height: 550 }}
                image={FirstImg}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Deliver;