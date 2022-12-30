import React from "react";
import {
  Grid
} from "@mui/material";

const TenderingAndContracting = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT ICL Dashboards - Tendering and Contracting - ICL Tendering" width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiM2M2MDA3NTQtNjJhYS00OTBhLTkyZjktM2U4OWFkMzMzZTU0IiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9&embedImagePlaceholder=true"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default TenderingAndContracting;