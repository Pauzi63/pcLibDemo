import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper, { PaperProps } from "@material-ui/core/Paper";

export interface Props {
  dialogContentTextValue: string;
  dialogTitleContextTextValue: string;
  confirmButtonTextValue: string;
  openDialog: boolean;
  setOpenDialog: (openDialog: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationDialog(props: Props) {
  const {
    dialogContentTextValue,
    dialogTitleContextTextValue,
    confirmButtonTextValue,
    openDialog,
    setOpenDialog,
    onConfirm,
    onCancel,
  } = props;

  const handleCancel = () => {
    onCancel();
    setOpenDialog(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setOpenDialog(false);
  };

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleCancel}
        // aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {dialogTitleContextTextValue}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContentTextValue}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            Abbrechen
          </Button>
          <Button onClick={handleConfirm} color="primary">
            {confirmButtonTextValue}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
