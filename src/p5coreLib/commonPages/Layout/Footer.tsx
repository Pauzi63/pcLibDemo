import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core/";

import globals from "../../../p5Lib/globals";

const useStyles = makeStyles({
  typography: {
    marginBottom: "24px",
  },
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    // background-color: red,
    // color: white,
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.footer}
    >
      {"© "}
      <Link color="inherit" href={globals.companyLink}>
        {globals.companyName} {globals.appVersion}
      </Link>
    </Typography>
  );
};

export default Footer;
