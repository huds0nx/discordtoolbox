import React, { useRef } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles((theme) => ({
  textField: {
    paddingRight: 20,
    width: '50%',
  },
  sender: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, null, 6, null),
  },
  checkbox: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
    paddingLeft: 20,
  }
}));

export default function sendWebhook() {
    // Embed Webhook
    function sendEmbedWebhook () {
    var request = new XMLHttpRequest();
    request.open("POST", sendTextRef.current.value);
    request.setRequestHeader('Content-type', 'application/json');
    var myEmbed = {
        author: {
        name: author
        },
        color: hexToDecimal(color),
        title : title,
        description : description,
        tts : tts,
        footer: {
            text : footer_text,
            icon_url : footer_icon_url
        }
    }
    let embed = {
        title: 'Embed title (required)',
        author: {
        name: '',
        url: '',
        icon: ''
        },
        description: '',
        url: '',
        thumb_url: '',
        color: '',
        fields: [{
        }
        ],
        footer: ''
    };
    const params = {
        username: username,
        embeds: [ myEmbed ]
    }
    request.send(JSON.stringify(params));
    }

    // Normal Webhook
    function sendWebhook() {
      if (accumulator == 0) {
          var timer1 = setInterval(() => {
              if (sendingPossible) {
                  sendProcedure();
              }    
          }, timer1Interval);
      }
      accumulator++;
      console.log(accumulator);
  
      function sendProcedure() {
          if (accumulator == 0) return;
          var request = new XMLHttpRequest();
          request.open("POST", webhookUrl);
      
          request.setRequestHeader('Content-type', 'application/json');
          var params = {
              username: username,
              avatar_url: avatar_url,
              content: message,
              tts: tts
          }
          request.send(JSON.stringify(params));
          sendingPossible = false
          request.addEventListener('load', () => {
              sendingPossible = true;
              if (request.status !== 429) {
                  accumulator--;
                  console.log(accumulator);
                  if (accumulator == 0) {
                      clearInterval(timer1);
                  }
              }
          })
      }
    }

    const sendTextRef = useRef();
    const classes = useStyles();

    const [state, setState] = React.useState({
        embedCheckbox: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    function checkCheckbox() {
      getData()
      if (webhookUrl.substr(0,4) == 'http' && webhookUrl.length !== 0) {
          if (destroy) {
              for (i = 0;i < slider.noUiSlider.get(); i++){
                  if (embed){
                      sendEmbedMessage()
                  }else{
                      sendMessage()
                  }
              }
              deleteWebhook()
              M.toast({html: 'Message/s sent', classes: 'rounded green'});
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Webhook successfully sent.
                </Alert>
              </Snackbar>
              M.toast({html: 'Webhook deleted', classes: 'rounded orange'});
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Webhook successfully deleted.
                </Alert>
              </Snackbar>
          } else {
              for (i = 0;i < slider.noUiSlider.get(); i++){
                  if (embed){
                      sendEmbedMessage()
                  }else{
                      sendMessage()
                  }
              }
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  Webhook successfully sent.
                </Alert>
              </Snackbar>
              M.toast({html: 'Message/s sent', classes: 'rounded green'});
          }
      } else {
          M.toast({html: 'Invalid webhook', classes: 'rounded red'});
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              The webhook you entered does not exist!
            </Alert>
          </Snackbar>
      }
    }

    return (
    <div className={classes.sender}>
        <TextField 
        className={classes.textField} 
        inputRef={sendTextRef}
        placeholder="Nickname"
        color="secondary"
        />
        <TextField 
        className={classes.textField} 
        inputRef={sendTextRef}
        placeholder="Avatar URL"
        color="secondary"
        />
        <TextField 
        className={classes.textField} 
        inputRef={sendTextRef}
        placeholder="Message"
        color="secondary"
        />
        <TextField 
        className={classes.textField} 
        inputRef={sendTextRef}
        placeholder="Webhook URL"
        color="secondary"
        />
        <Button onClick={sendWebhook} variant="contained" color="secondary">
        Send
        </Button>
        <FormControlLabel
        className={classes.checkbox}
        control={
          <Checkbox
            checked={state.embedCheckbox}
            onChange={handleChange}
            name="embedCheckbox"
            color="secondary"
          />
        }
        label="Embed"
      />
    </div>
    );
}