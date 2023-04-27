import React from "react";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import {
  Button as MuiButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ReplyIcon from '@mui/icons-material/Reply';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const Button = styled(MuiButton)(spacing);
const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#E57200",
    },
  },
});

const StandardReports = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <React.Fragment>
      <Grid container p={isLgUp ? 12 : 5}>
        <Grid item md={12}>
          <Grid container spacing={6}>
            <Grid item md={10}>
              <ThemeProvider theme={themeCustom}>
                <Button
                  mr={2}
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/")}
                >
                  <ReplyIcon />
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
          <br />
          <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
            <Grid item md={12} zeroMinWidth>
              <iframe title="Report Section" width="100%" height="100%"
                      src="https://app.powerbi.com/view?r=eyJrIjoiMDhiNWY1YmEtZTRhYi00OWYwLThkMGMtZjIxMTIyNzhkZjMzIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection41a072b839dc3a7bc861"
                      frameBorder="0" allowFullScreen="true"></iframe>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default StandardReports;