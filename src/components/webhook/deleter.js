import React, { useRef } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  textField: {
    paddingRight: 20,
    width: '50%',
  },
  deleter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, null, 6, null),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Deleter() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function deleteWebhook() {
    const request = new XMLHttpRequest();
    request.open("DELETE", deleteTextRef.current.value);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
  }

  var http = new XMLHttpRequest();
  http.open('HEAD', false);
  http.send();

  if (http.status != 204) {
    
  }
  if (http.status != 404) {  
    
  }

  const classes = useStyles();
  const deleteTextRef = useRef();

  return (
    <div className={classes.deleter}>
      <TextField 
        className={classes.textField} 
        inputRef={deleteTextRef}
        placeholder="Webhook URL"
        color="secondary"
      />
      <Button onClick={deleteWebhook} variant="contained" color="secondary">
        Delete
      </Button>
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Webhook successfully deleted.
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Webhook doesn't exist.
        </Alert>
      </Snackbar>
    </div>
  );
}