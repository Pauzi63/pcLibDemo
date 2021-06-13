import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ApplicationContext } from "../../p5coreLib/context/applicationContext";
import ConfirmationDialog from "../../p5coreLib/commonPages/ConfirmationDialog";

const Page1 = () => {
  const { messageCount, setMessageCount } = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = React.useState(false);

  function onCancelClicked() {
    console.log("Cancel!");
  }

  function onConfirmedClicked() {
    console.log("Confirmed!");
  }

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
    </React.Fragment>
  );
};

export default Page1;
