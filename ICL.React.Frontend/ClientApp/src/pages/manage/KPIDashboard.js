import React from "react";
import {Grid} from "@mui/material";


const KPIDashboard = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
      <iframe title="ICL Performance Monitoring_KPI Dashboards - Objective 1" width="100%" height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiY2FjOTdhNTAtNjc4ZS00ZDQ5LWI2ODgtMjI2NWRkMThkNmM1IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9" 
      frameborder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default KPIDashboard;