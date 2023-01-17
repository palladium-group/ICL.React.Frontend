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
      main: "#FFB500",
    },
  },
});

const Parsyl = () => {
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
              onClick={() => navigate("/store")}
            >
              <ReplyIcon />
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
      <br />
      <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
        <Grid item md={12} zeroMinWidth>
          <iframe title="Parsyl" width="100%" height="100%"
                  src="https://app.parsyl.com/report/shipments/v3/aa5dcfff-b494-4f63-9544-34b5f537d497?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzQzOTgzNzAsImlhdCI6MTY3Mzk2NjM3MCwiaXNzIjoicGFyc3lsLWFwaSIsInVzZXJJZCI6IjdkZmYxYTIzLWQ0N2UtNGFiYi1hZDIzLThhMDhmNWI4YWVlNSIsInJlc291cmNlSWQiOiJhYTVkY2ZmZi1iNDk0LTRmNjMtOTU0NC0zNGI1ZjUzN2Q0OTciLCJyZXNvdXJjZVR5cGUiOiJzaGlwbWVudCJ9.DCruetpvhh5aMMLuDsUdIeXCG5hHer1qdX2PvMbAzQs"
                  frameBorder="0" allowFullScreen="true"></iframe>
        </Grid>
      </Grid>
    </>
  );
};
export default Parsyl;