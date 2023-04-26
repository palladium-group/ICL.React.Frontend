import React from "react";
import {Card as MuiCard, CardMedia, Grid} from "@mui/material";
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
import ICL_Architecture from "../../vendor/FreightBillAudit_1.png";
import ICL_Architecture2 from "../../vendor/FreightBillAudit_2.png";
import ICL_Architecture3 from "../../vendor/FreightBillAudit_3.png";

const Button = styled(MuiButton)(spacing);
const Card = styled(MuiCard)(spacing);
const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#E57200",
    },
  },
});

const FreightBillAudit = () => {
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
              <Card raised sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  sx={{ padding: "0em 0em 0 0em", objectFit: "contain" }}
                  image={ICL_Architecture}
                />
              </Card>
            </Grid>
            <Grid item md={12} zeroMinWidth>
              <Card raised sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  sx={{ padding: "0em 0em 0 0em", objectFit: "contain" }}
                  image={ICL_Architecture2}
                />
              </Card>
            </Grid>
            <Grid item md={12} zeroMinWidth>
              <Card raised sx={{ width: "100%" }}>
                <CardMedia
                  component="img"
                  sx={{ padding: "0em 0em 0 0em", objectFit: "contain" }}
                  image={ICL_Architecture3}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default FreightBillAudit;