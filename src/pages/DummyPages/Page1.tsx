import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ApplicationContext } from "../../core/context/ApplicationContext";

const Page1 = () => {
  const { messageCount, setMessageCount } = useContext(ApplicationContext);
  return (
    <React.Fragment>
      <h2>Page 1</h2>
      <br />
      <br />
      Anzahl Nachrichten: {messageCount}
      <br />
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setMessageCount(messageCount + 1)}
      >
        Nachricht hinzufügen
      </Button>
    </React.Fragment>
  );
};

export default Page1;
