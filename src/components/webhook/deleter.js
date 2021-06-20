import React, { useRef } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    flex: 1,
    paddingRight: 20,
    width: 500,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Deleter() {
  function deleteWebhook() {
    const request = new XMLHttpRequest();
    request.open("DELETE", textRef.current.value);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
  }

  const classes = useStyles();
  const textRef = useRef();



  return (
    <div className={classes.deleter}>
      <TextField 
        className={classes.textField} 
        inputRef={textRef}
        placeholder="Webhook URL"
      />
      <Button onClick={deleteWebhook} variant="contained" color="primary">
        Delete
      </Button>
    </div>
  );
}