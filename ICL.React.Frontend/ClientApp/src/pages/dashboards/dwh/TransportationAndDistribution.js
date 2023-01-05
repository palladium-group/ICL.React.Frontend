import React from "react";
import {Grid} from "@mui/material";

const TransportationAndDistribution = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards Transport and distribution - Transport and distribution" width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiODVmZWQ2ZTAtYWYzMy00NzNkLThhNmMtOTRlZTkzNGE3MDI0IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default TransportationAndDistribution;