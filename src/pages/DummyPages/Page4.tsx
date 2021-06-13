import { Grid } from "@material-ui/core";
import React from "react";
import SimpleCard from "./components/SimpleCard";

const xs = 12;
const sm = 10;
const md = 6;
const lg = 4;
const xl = 3;

const Page4 = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      align-items="flex-start"
    >
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
      <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <SimpleCard />
      </Grid>
    </Grid>
  );
};

export default Page4;
