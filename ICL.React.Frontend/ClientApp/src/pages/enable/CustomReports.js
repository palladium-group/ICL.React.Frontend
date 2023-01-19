import React from "react";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button as MuiButton,
} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';

const Button = styled(MuiButton)(spacing);
const theme = createTheme({
  palette: {
    secondary: {
      main: "#05C3DE",
    },
  },
});

const CustomReports = () => {
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
              onClick={() => navigate("/enable")}
            >
              <ReplyIcon />
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
        <Grid item md={12} zeroMinWidth>
          <iframe title="ICL Custom Reports" width="100%" height="100%"
                  src="https://app.powerbi.com/view?r=eyJrIjoiYTRlZWJlMTQtYzM5YS00OTM1LTk3NWMtNmRhYWExNGM0YWYzIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection219f87e998dc237938e9"
                  frameBorder="0" allowFullScreen="true"></iframe>
        </Grid>
      </Grid>
    </>
  );
};
export default CustomReports;