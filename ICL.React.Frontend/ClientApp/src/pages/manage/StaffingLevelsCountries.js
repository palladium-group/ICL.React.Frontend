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
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";

const Button = styled(MuiButton)(spacing);
const themeCustom = createTheme({
  palette: {
    secondary: {
      main: "#E57200",
    },
  },
});

const StaffingLevelsCountries = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                  color="secondary"
                  onClick={() => navigate("/manage")}
                >
                  <ReplyIcon />
                </Button>
              </ThemeProvider>
            </Grid>
            <Grid item md={2} sx={{ margin: 0 }}>
              <Grid container direction="row-reverse">
                <Grid item>
                  <ThemeProvider theme={themeCustom}>
                    <Button
                      mr={2}
                      variant="contained"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      <AddIcon />
                    </Button>
                  </ThemeProvider>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
            <Grid item md={12} zeroMinWidth>
              <iframe title="LIT ICL Dashboards Staffing level - Countries" width="100%" height="100%"
                      src="https://app.powerbi.com/view?r=eyJrIjoiMjdhMjE1OWMtZWI5OC00MTBiLWFjNGUtOGM5NDQyNDE2ODBlIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection497b684f3ad0bc0248d7"
                      frameBorder="0" allowFullScreen="true"></iframe>
            </Grid>
          </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>GHSC ICL Staffing Levels - Countries</DialogTitle>
          <DialogContent>
            <iframe width="640px" height="480px" title="GHSC ICL Staffing Levels - Countries " src="https://forms.office.com/r/FRFeAywb3m?embed=true" frameBorder="0"
                    marginWidth="0" marginHeight="0" style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                    allowFullScreen webkitallowfullscreen mozallowfullscreen msallowfullscreen></iframe>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </React.Fragment>
  );
};
export default StaffingLevelsCountries;