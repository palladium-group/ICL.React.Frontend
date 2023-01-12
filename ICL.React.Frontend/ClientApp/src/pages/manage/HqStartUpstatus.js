import React from "react";
import {Grid} from "@mui/material";


const HqStartUpStatus = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="HQ Start up - HQ startup Status" width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiNWJjNjk2YWYtOGEwYS00YTU4LThlODUtNTRjMmJhNDhiNzhkIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default HqStartUpStatus;