import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from "@material-ui/core/";

import globals from "../../utils/Globals"

const useStyles = makeStyles({
  typography: {
    marginBottom: '24px'
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.typography}>
      {"© "}
      <Link color="inherit" href={globals.companyLink}>{globals.companyName}</Link>
    </Typography>
  );
}

export default Footer
