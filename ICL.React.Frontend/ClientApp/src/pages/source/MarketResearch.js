import React from "react";
import {Breadcrumbs as MuiBreadcrumbs, Grid, Link, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import styled from "@emotion/styled";
import {spacing} from "@mui/system";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const MarketResearch = () => {
  return (
    <Grid container justifyContent="center" spacing={1} alignItems="stretch" sx={{ minHeight: "800px" }}>
      <Grid item md={12} zeroMinWidth>
        <Breadcrumbs aria-label="Breadcrumb" mt={2}>
          <Link component={NavLink} to="/source">
            Source
          </Link>
          <Typography>Market Research</Typography>
        </Breadcrumbs>
        <iframe title="Market Research" width="100%" height="100%"
                src="https://thepalladiumgroup.atlassian.net/wiki/spaces/GISS/pages/2118090754/Market+Conditions+-+Research"
                frameBorder="0" allowFullScreen="true"></iframe>
      </Grid>
    </Grid>
  );
};
export default MarketResearch;