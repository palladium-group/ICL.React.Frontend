import React from "react";
import {
  Grid
} from "@mui/material";

const Inbound = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards - Inbound - Warehouse Inbound" width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiMTE4MzVkMDctNGZkZC00YjA1LWJjYmMtNjgwNjhjZjU3MWNlIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default Inbound;