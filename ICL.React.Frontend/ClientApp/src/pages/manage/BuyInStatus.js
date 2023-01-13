import React from "react";
import {Grid} from "@mui/material";


const BuyInStatus = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
      <iframe title="Buy-in Status - Buyin" width="100%" height="100%"
      src="https://app.powerbi.com/view?r=eyJrIjoiMjMwYjVlN2YtZmNhZC00ZTE5LTgzZTQtZTQzYzRjNmE5YTRiIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
       frameborder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default BuyInStatus;