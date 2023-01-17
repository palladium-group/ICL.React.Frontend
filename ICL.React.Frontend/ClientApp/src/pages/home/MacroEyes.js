import {Grid, Typography} from "@mui/material";
import React from "react";

const MacroEyes = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom display="inline">
        MacroEyes Planning
      </Typography>
      <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
        <Grid item md={12} zeroMinWidth>
          <iframe title="MacroEyes Planning" width="100%"
                  height="100%"
                  src="https://palladium-forecast.s3.us-east-1.amazonaws.com/index.html"
                  frameBorder="0" allowFullScreen="true"></iframe>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default MacroEyes;