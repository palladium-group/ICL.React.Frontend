import React from "react";
import {Grid} from "@mui/material";


const KPIDashboard = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards - KPI Dashboard Quality level" width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiMTM0ZDkyZWYtNTI2Zi00ZGYxLThmODItNThjODQyNTAyNDhjIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&pageName=ReportSection"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default KPIDashboard;