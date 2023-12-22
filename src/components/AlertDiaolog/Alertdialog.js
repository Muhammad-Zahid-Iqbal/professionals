import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Alertdialog = ({ open, handleClose, signupAlert,handleCloseSignUp, openReview, handleCloseReview }) => {
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent sx={{ width: '250px' }}>
                    <DialogContentText id="alert-dialog-slide-description" sx={{ color: "green", fontSize: "16px" }}>
                        Your Profile data has been updated Successfully!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={signupAlert}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseSignUp}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent sx={{ width: '250px' }}>
                    <DialogContentText id="alert-dialog-slide-description" sx={{ color: "green", fontSize: "16px" }}>
                        You have registered successfully!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseSignUp}>OK</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openReview}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseReview}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent sx={{ width: '250px' }}>
                    <DialogContentText id="alert-dialog-slide-description" sx={{ color: "green", fontSize: "16px" }}>
                        Your review added successfully!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseReview}>OK</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Alertdialog
