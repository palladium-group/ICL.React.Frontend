import React from "react";
import {Card as MuiCard, CardMedia, Grid} from "@mui/material";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import ICL_Architecture from "../../../src/vendor/System_Architecture.png";
const Card = styled(MuiCard)(spacing);

const About = () => {
  return (
    <>
      <Card raised sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          sx={{ padding: "0em 0em 0 0em", objectFit: "contain" }}
          image={ICL_Architecture}
        />
      </Card>
    </>
  );
};
export default About;