import React from "react";
import {Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button as MuiButton,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ReplyIcon from '@mui/icons-material/Reply';

const Button = styled(MuiButton)(spacing);

const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#FFB500",
    },
  },
});

const Parsyl = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container p={isLgUp ? 12 : 5}>
      <Grid item md={12}>
        <Grid container spacing={6}>
          <Grid item>
            <ThemeProvider theme={themeCustom}>
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
                    src="https://app.parsyl.com/report/shipments/v3/2b70022c-5915-4cc3-a42e-d1926c600b18?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI4MjM5NDUsImlhdCI6MTY4MjM5MTk0NSwiaXNzIjoicGFyc3lsLWFwaSIsInVzZXJJZCI6Ijc1Mzc0OWM2LTQ0MTUtNDA1Zi1iYmMzLTBiMmU1NjljNDdlMyIsInJlc291cmNlSWQiOiIyYjcwMDIyYy01OTE1LTRjYzMtYTQyZS1kMTkyNmM2MDBiMTgiLCJyZXNvdXJjZVR5cGUiOiJzaGlwbWVudCJ9.jHq7nxab10el6GpM8ok35kw55jJr70kXc35CEZW0j2g"
                    frameBorder="0" allowFullScreen="true"></iframe>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Parsyl;