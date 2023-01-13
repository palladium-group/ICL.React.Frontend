import React from "react";
import {Grid} from "@mui/material";

const LetterOfCredit = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="Credit Management - Page 1" width="100%" height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiYWZlMmQ4YjYtZjIxYy00Nzg4LTk3NWItMGVjNTgwMDJiNWFjIiwidCI6ImU3OTQyOTc0LTk3MzgtNGE0YS1iNjQ2LTJhYjkwZjc5ZGIwZiIsImMiOjF9"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default LetterOfCredit;