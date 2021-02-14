import React, { ReactChildren, ReactChild } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: '0px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
  },
}));

interface Props {
  title: string;
  openPopup: boolean;
  setOpenPopup: (openPopup: boolean) => void;
  children: ReactChildren[] | ReactChild;
}

export default function PopUp(props: Props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton
            aria-label="Close"
            className={classes.closeButton}
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
