import React from "react";
import {Grid} from "@mui/material";


const WarehousingCostAnalysis = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
      <iframe title="ICL Financial Management_Warehousing Costs Analysis - Warehouse Costs 2" width="100%" height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiOTk2YmQwMTUtNTlkNS00NzZlLWFkMzEtMGQ2ODA2ZjNhNGQwIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9" 
      frameborder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default WarehousingCostAnalysis;
