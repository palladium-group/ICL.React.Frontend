import React from "react";
import {
  Grid
} from "@mui/material";

const Monitoring = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <iframe title="LIT Monitoring" width="100%" height="100%"
                src="https://app.parsyl.com/report/shipments/v3/aa5dcfff-b494-4f63-9544-34b5f537d497?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzI1MjEyNzksImlhdCI6MTY3MjA4OTI3OSwiaXNzIjoicGFyc3lsLWFwaSIsInVzZXJJZCI6Ijg2OWM3Mjg2LWY4NjktNGExYy1iODBlLTJjMThiYTNhMDE1YyIsInJlc291cmNlSWQiOiJhYTVkY2ZmZi1iNDk0LTRmNjMtOTU0NC0zNGI1ZjUzN2Q0OTciLCJyZXNvdXJjZVR5cGUiOiJzaGlwbWVudCJ9.yuCh-7D3YWxSLkxXy7w2PB6TAu_mf71L5Tmmqp6SQ1M"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default Monitoring;