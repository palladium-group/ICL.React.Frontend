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
      main: "#BA0C2F",
    },
  },
});

const OperationalPlanning = () => {
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
              onClick={() => navigate("/plan")}
            >
              <ReplyIcon />
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
        <Grid item md={12} zeroMinWidth>
          <iframe title="Supply Chain Planning" width="100%" height="100%"
                  src="https://app.powerbi.com/reportEmbed?reportId=f4db9a59-6a0c-4969-9dcb-592d5e7c7eaa&autoAuth=true&ctid=e7942974-9738-4a4a-b646-2ab90f79db0f"
                  frameBorder="0" allowFullScreen="true"></iframe>
        </Grid>
      </Grid>
    </>
  );
};
export default OperationalPlanning;