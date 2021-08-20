import React, { useContext } from "react";

import { ApplicationContext } from "../../p5coreLib/context/applicationContext";
import { Button } from "@material-ui/core";
import ConfirmationDialog from "../../p5coreLib/commonPages/ConfirmationDialog";
import { useErrorHandler } from "react-error-boundary";
import useAccessToken from "../../p5coreLib/utils/getAADToken";

const Page1 = () => {
  const { messageCount, setMessageCount } = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const handleError = useErrorHandler();

  const [xx, setXx] = React.useState<string | null>();
  const xxx = useAccessToken();

  function onCancelClicked() {
    console.log("Cancel!");
  }

  function onConfirmedClicked() {
    console.log("Confirmed!");
  }

  // React.useEffect(() => {
  //   setXx(useAccessToken());
  // }, []);

  React.useEffect(() => {
    console.log("xxx: ", xxx);
  }, [xxx]);

  return (
    <React.Fragment>
      <h2>Page 1</h2>
      <br />
      <br />
      <ConfirmationDialog
        dialogContentTextValue={"dialogContentTextValue"}
        dialogTitleContextTextValue={"dialogTitleContextTextValue"}
        confirmButtonTextValue="löschen"
        openDialog={isOpen}
        setOpenDialog={setIsOpen}
        onConfirm={() => onConfirmedClicked}
        onCancel={() => onCancelClicked}
      />
      <br />
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        Dialog öffnen
      </Button>
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
      <br />
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          throw new Error("Da ist irgendein Fehler aufgetreten");
        }}
      >
        Throw Error
      </Button>
      <br />
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          let x = 15 / 0;
        }}
      >
        Division durch 0
      </Button>
    </React.Fragment>
  );
};

export default Page1;
