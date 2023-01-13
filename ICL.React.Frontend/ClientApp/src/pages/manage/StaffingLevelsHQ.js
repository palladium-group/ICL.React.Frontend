
import React from "react";
import {Grid} from "@mui/material";


const StaffingLevelsHQ = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
      <iframe title="LIT ICL Dashboards Staffing level HQ - Summary " width="100%" height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiMzJiZWZmZDctMDQ5YS00ZTUxLWE4ZjEtYjZhNjJhN2Q2MGIwIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9" 
      frameborder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default StaffingLevelsHQ;