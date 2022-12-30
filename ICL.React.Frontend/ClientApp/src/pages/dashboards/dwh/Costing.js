import React from "react";
import {
  Grid
} from "@mui/material";

const Costing = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards - Costing - Costing " width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiMWYyZjZhNmUtMzkwOS00NTE1LWE1MGItODYwYTUyNTViZDdjIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&embedImagePlaceholder=true"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default Costing;