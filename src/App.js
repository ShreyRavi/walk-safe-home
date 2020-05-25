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

  //local storage keys: wsh-call, wsh-text
  var localStorage = require('local-storage');

  //React State Props
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [callNumber, setCallNumber] = useState("911")
  const [panicBtnPressed, setPanicBtnPressed] = useState(false);
  const [textNumbers, setTextNumbers] = useState([]);
   
  //Function Props to handle all logic

  //On-Load
  useEffect(() => {
    if(localStorage("wsh-call") != null){
      setCallNumber(localStorage.get("wsh-call"));
    }
    if(localStorage("wsh-text") != null){
      setTextNumbers(localStorage.get("wsh-text").split(","));
    }
  }, []);

  //On Panic Button Pressed
  const handlePanic = () => {
    setPanicBtnPressed(true);
    window.location.href = "tel://" + callNumber;
  }

  //On Closing Error Snackbar
  const handleCloseError = (e, r) => {
    if (r === 'clickaway') {
      return;
    }
    setPanicBtnPressed(false);
  }

  //On Closing Success Snackbar
  const handleCloseSuccess = (e, r) => {
    handleCloseError(e, r);
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
        textNumbers={textNumbers}
        setTextNumbers={setTextNumbers}
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
          panicBtnPressed={panicBtnPressed}
          handleCloseError={handleCloseError}
          handleCloseSuccess={handleCloseSuccess}
        />
      
      </Grid>
    </ThemeProvider>
  );
}

export default App;