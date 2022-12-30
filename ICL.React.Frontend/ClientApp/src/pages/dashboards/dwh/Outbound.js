import React from "react";
import {
  Grid
} from "@mui/material";

const Outbound = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards - Outbound - Warehouse Outbound" width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiOTBhM2RlYjMtM2NiMC00ZTNmLTgxYWItYzczY2Q0MGI0OWI1IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default Outbound;