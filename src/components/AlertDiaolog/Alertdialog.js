import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = ({ open, handleClose, content, disableScrollLock }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      disableScrollLock={disableScrollLock}
    >
      <DialogContent sx={{ width: "250px" }}>
        <DialogContentText
          id="alert-dialog-slide-description"
          sx={{ color: "green", fontSize: "16px" }}
        >
          {content}
        </DialogContentText>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
