import React from "react";
import {Card as MuiCard, CardMedia, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button as MuiButton,
} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ICL_Architecture from "../../../src/vendor/System_Architecture.png";
// import FirstImg from "../../vendor/illustration-manage.png";
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
const Card = styled(MuiCard)(spacing);
const Button = styled(MuiButton)(spacing);

const theme = createTheme({
  palette: {
    secondary: {
      main: "#4D4D4D",
    },
  },
});

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Button
              mr={2}
              variant="contained"
              color="secondary"
              onClick={() => navigate("/MISAdministration")}
            >
              <ReplyIcon />
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          sx={{ height: 879, width: 1200 }}
          image={ICL_Architecture}
        />
      </Card>
    </>
  );
};
export default About;