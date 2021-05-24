import React, { useContext } from "react";
import { Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  notificationConfirmed: () => void;
}

const NotificationComponent = (props: Props) => {
  props.notificationConfirmed(); // Id zurücksetzen
  return (
    <React.Fragment>
      <Paper style={{ padding: "3px" }}>
        <div>
          <h3>es gibt dzt. keine neuen Anküdigungen</h3>
          <Typography paragraph></Typography>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default NotificationComponent;
