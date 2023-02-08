import React from 'react'

import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

function SnackBar(props) {
  const { open, setOpen, message } = props

  const vertical = 'bottom'
  const horizontal = 'center'

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      console.log("clicked awat")
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
      message={message}
      action={action}
    />
  )
}

export default SnackBar