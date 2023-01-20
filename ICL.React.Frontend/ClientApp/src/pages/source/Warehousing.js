import React from "react";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import {
  Button as MuiButton,
} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const Button = styled(MuiButton)(spacing);
const theme = createTheme({
  palette: {
    secondary: {
      main: "#8D6E97",
    },
  },
});

const Warehousing = () => {
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
              onClick={() => navigate("/source")}
            >
              <ReplyIcon />
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
        <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards - Warehousing" width="100%" height="100%" 
        src="https://app.powerbi.com/view?r=eyJrIjoiMzBhM2RmMjQtMTFmNi00NzM1LThhYWItYjI3YmIwYmFiOTc3IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection41a072b839dc3a7bc861" 
        frameborder="0" allowFullScreen="true"></iframe>
        </Grid>
      </Grid>
    </>
  );
};
export default Warehousing;