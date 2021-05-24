import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
}));

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dialogTitle?: string;
  dialogContent?: string;
  dialogSubContent?: string;
  buttonCancelCaption: string;
  buttonConfirmationCaption: string;
  onCancelClicked: () => void;
  onConfirmedClicked: () => void;
}

export default function ConfirmDialog(props: Props) {
  const {
    isOpen,
    setIsOpen,
    dialogTitle,
    dialogContent,
    dialogSubContent,
    buttonCancelCaption,
    buttonConfirmationCaption,
    onCancelClicked,
    onConfirmedClicked,
  } = props;
  const classes = useStyles();

  function handleCancelClicked() {
    onCancelClicked();
    setIsOpen(false);
  }

  function handleConfirmedClicked() {
    onConfirmedClicked();
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      fullScreen={false}
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="md"
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle className={classes.dialogTitle}>{dialogTitle}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{dialogContent}</Typography>
        <Typography variant="subtitle2">{dialogSubContent}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button onClick={handleCancelClicked}>{buttonCancelCaption}</Button>
        <Button onClick={handleConfirmedClicked}>
          {buttonConfirmationCaption}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
