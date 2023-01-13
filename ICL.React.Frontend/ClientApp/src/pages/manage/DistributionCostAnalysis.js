import React from "react";
import {Grid} from "@mui/material";


const DistributionCostAnalysis = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
      <iframe title="ICL Financial Management_Distribution Costs Analysis - Distribution Profile" width="100%" height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiNmNlYjkyMWEtNmQ5Zi00ZGJmLWE0YmEtNTcwZGZkNzQzNzM3IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
       frameborder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default DistributionCostAnalysis;
