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

const MiddleWareStatus = () => {
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
      <br />
      <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
        <Grid item md={12} zeroMinWidth>
          <iframe title="Middleware Status" width="100%" height="100%"
                  src="https://portal.azure.com/#view/Microsoft_Azure_MonitoringMetrics/Metrics.ReactView/ResourceId/%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL/TimeContext~/%7B%22options%22%3A%7B%22grain%22%3A1%7D%2C%22relative%22%3A%7B%22duration%22%3A3600000%7D%7D/Chart~/%7B%22metrics%22%3A%5B%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22IncomingRequests%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Incoming%20Requests%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22SuccessfulRequests%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Successful%20Requests%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22ServerErrors%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Server%20Errors.%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22UserErrors%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22User%20Errors.%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%2C%7B%22resourceMetadata%22%3A%7B%22id%22%3A%22%2Fsubscriptions%2Fa8177bba-e9b3-4b53-a8d9-2c528828d5ec%2FresourceGroups%2F2IDUSA.476.243%2Fproviders%2FMicrosoft.ServiceBus%2Fnamespaces%2FGHSC-ICL%22%7D%2C%22name%22%3A%22ThrottledRequests%22%2C%22aggregationType%22%3A1%2C%22metricVisualization%22%3A%7B%22displayName%22%3A%22Throttled%20Requests.%22%2C%22resourceDisplayName%22%3A%22ghsc-icl%22%7D%7D%5D%2C%22title%22%3A%22Requests%22%2C%22titleKind%22%3A2%2C%22timespan%22%3A%7B%22relative%22%3A%7B%22duration%22%3A3600000%7D%2C%22grain%22%3A1%2C%22showUTCTime%22%3Afalse%7D%2C%22visualization%22%3A%7B%22chartType%22%3A2%7D%7D/openInEditMode~/false"
                  frameBorder="0" allowFullScreen="true"></iframe>
        </Grid>
      </Grid>
    </>
  );
};
export default MiddleWareStatus;