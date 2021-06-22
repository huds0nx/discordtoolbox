import React, { useRef } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    paddingRight: 20,
    width: '50%',
  },
  deleter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3, null, 6, null),
  },
}));

export default function Deleter() {
  function deleteWebhook() {
    const request = new XMLHttpRequest();
    request.open("DELETE", deleteTextRef.current.value);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
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
    </div>
  );
}