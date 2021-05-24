import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ApplicationContext } from "../../p5coreLib/context/ApplicationContext";
import ConfirmDialog from "../../p5coreLib/CommonPages/ConfirmDialog";

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
      <ConfirmDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        dialogTitle="Dialog Tilte"
        dialogContent="DialogContent"
        dialogSubContent="Dialog SubContent"
        buttonCancelCaption="Na"
        buttonConfirmationCaption="Jo"
        onCancelClicked={onCancelClicked}
        onConfirmedClicked={onConfirmedClicked}
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
