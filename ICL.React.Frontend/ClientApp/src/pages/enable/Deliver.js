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
const Button = styled(MuiButton)(spacing);
const Card = styled(MuiCard)(spacing);

const theme = createTheme({
  palette: {
    secondary: {
      main: "#05C3DE",
    },
  },
});

const Deliver = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Helmet title="Formik" />
      <ThemeProvider theme={theme}>
        <Button
          mr={2}
          variant="contained"
          color="secondary"
          onClick={() => navigate("/enable")}
        >
          <ReplyIcon />
        </Button>
      </ThemeProvider>
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
    </React.Fragment>
  );
};
export default Deliver;