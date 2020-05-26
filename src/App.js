import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from './components/Header';
import PanicButton from './components/PanicButton';
import HelpDrawer from './components/HelpDrawer';
import SettingsDrawer from './components/SettingsDrawer';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F44335',
    },
    primary: red,
    secondary: {
      main: '#D32F2F',
    },
    info: {
      main: '#00008D'
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    textAlign: 'center',
    backgroundColor: '#F44335',
  },
  divider: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  links: {
    textDecoration: 'none',
  },
}));

const App = () => {
  //initialize styles
  const classes = useStyles();

  //twilio
  //require('dotenv').config()
  //const accountSid = process.env.TWILIO_ACCOUNT_SID;
  //const authToken = process.env.TWILIO_AUTH_TOKEN;
  //const client = require('twilio')(accountSid, authToken);

  //local storage keys: wsh-call, wsh-text
  var localStorage = require('local-storage');

  //React State Props
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [callNumber, setCallNumber] = useState("911")
  const [panicBtnPressed, setPanicBtnPressed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [textNumber1, setTextNumber1] = useState("");
  const [textNumber2, setTextNumber2] = useState("");
  const [textNumber3, setTextNumber3] = useState("");
  const [textNumber4, setTextNumber4] = useState("");
  const [textNumber5, setTextNumber5] = useState("");
   
  //Function Props to handle all logic

  //On-Load
  useEffect(() => {
    if(localStorage("wsh-call") != null){
      setCallNumber(localStorage.get("wsh-call"));
    }
    if(localStorage("wsh-text") != null){
      const getLSnums = localStorage.get("wsh-text").split(",");
      setTextNumber1(getLSnums[0]);
      setTextNumber2(getLSnums[1]);
      setTextNumber3(getLSnums[2]);
      setTextNumber4(getLSnums[3]);
      setTextNumber5(getLSnums[4]);
    }
  }, []);

  //On Panic Button Pressed
  const handlePanic = () => {
    setPanicBtnPressed(true);
    setShowError(true);
    window.location.href = "tel://" + callNumber;

    /*client.messages
    .create({
      body: 'Your friend may be in an emergency! Please call them ASAP.',
      from: process.env.TWILIO_NUMBER,
      to: textNumber1
    })
    .then(message => console.log(message.sid));

    client.messages
    .create({
      body: 'Your friend may be in an emergency! Please call them ASAP.',
      from: process.env.TWILIO_NUMBER,
      to: textNumber2
    })
    .then(message => console.log(message.sid));

    client.messages
    .create({
      body: 'Your friend may be in an emergency! Please call them ASAP.',
      from: process.env.TWILIO_NUMBER,
      to: textNumber3
    })
    .then(message => console.log(message.sid));

    client.messages
    .create({
      body: 'Your friend may be in an emergency! Please call them ASAP.',
      from: process.env.TWILIO_NUMBER,
      to: textNumber4
    })
    .then(message => console.log(message.sid));

    client.messages
    .create({
      body: 'Your friend may be in an emergency! Please call them ASAP.',
      from: process.env.TWILIO_NUMBER,
      to: textNumber5
    })
    .then(message => console.log(message.sid));*/
  }

  //On Closing Error Snackbar
  const handleCloseError = (e, r) => {
    if (r === 'clickaway') {
      return;
    }
    setShowError(false);
  }

  //On Closing Success Snackbar
  const handleCloseSuccess = (e, r) => {
    if (r === 'clickaway') {
      return;
    }
    setPanicBtnPressed(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <HelpDrawer 
        helpOpen={helpOpen}
        setHelpOpen={setHelpOpen}
      />

      <SettingsDrawer 
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
        callNumber={callNumber}
        setCallNumber={setCallNumber}
        textNumber1={textNumber1}
        textNumber2={textNumber2}
        textNumber3={textNumber3}
        textNumber4={textNumber4}
        textNumber5={textNumber5}
        setTextNumber1={setTextNumber1}
        setTextNumber2={setTextNumber2}
        setTextNumber3={setTextNumber3}
        setTextNumber4={setTextNumber4}
        setTextNumber5={setTextNumber5}
      />

      <Header 
        setHelpOpen={setHelpOpen}
        setSettingsOpen={setSettingsOpen}
      />

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >

        <PanicButton 
          handlePanic={handlePanic}
          showError={showError}
          panicBtnPressed={panicBtnPressed}
          handleCloseError={handleCloseError}
          handleCloseSuccess={handleCloseSuccess}
        />
      
      </Grid>
    </ThemeProvider>
  );
}

export default App;