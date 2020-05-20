import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MessageIcon from '@material-ui/icons/Message';
import Geolocation from 'react-geolocation';
import PanicButtonImg from './PanicButton.png';
import PanicButtonPressedImg from './PanicButtonPressed.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(5),
  },
  callInput: {
    width: "80%",
    marginTop: "20px",
    textAlign: "center",
  },
  alertText: {
    color: "red",
  },
  directions: {
    fontWeight: 'bolder',
    marginTop: '10px',
  },
  drawer: {
    margin: '20px',
    padding: '20px',
  },
}));

const App = () => {
  const classes = useStyles();
  var localStorage = require('local-storage');
  //local storage keys: wsh-call, wsh-text
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [callNumber, setCallNumber] = useState("911")
  const [panicBtnPressed, setPanicBtnPressed] = useState(false);
  const [textNumbers, setTextNumbers] = useState(["No Texting Numbers Stored!"]);
   
  //onload
  useEffect(() => {
    if(localStorage("wsh-call") != null){
      setCallNumber(localStorage.get("wsh-call"));
    }
    if(localStorage("wsh-text") != null){
      setTextNumbers(localStorage.get("wsh-text").split(","));
    }
  }, []);
  const handlePanic = () => {
    setPanicBtnPressed(true);
    window.location.href = "tel://" + callNumber;
  }
  return (
    <div className={classes.root}>

      {/*Setting Drawer*/}
      <Drawer
        anchor="left"
        className={classes.drawer}
        open={settingsOpen}
        onClose={() => {setSettingsOpen(false)}}
      >
        {/*Settings - CallInput*/}
        <Typography className={classes.directions} variant="body2">enter number to call</Typography>
        <TextField 
        className={classes.callInput} 
        onInput={(e) => {if(/^\d+$/.test(e.target.value)){setCallNumber(e.target.value); localStorage.set("wsh-call",e.target.value);}}} 
        id="CallInput" 
        label="Emergency Number to Call &#9742;" 
        variant="outlined" 
        value={callNumber}
        inputProps={{style: { textAlign: 'center' }}}
        >
        </TextField>

        {/*Settings - TextInput*/}
        <hr />
        <Typography className={classes.directions} variant="body2">enter number(s) to text</Typography>
        <TextField 
        className={classes.callInput} 
        onInput={(e) => {setTextNumbers(e.target.value.split(",")); localStorage.set("wsh-text",e.target.value);}} 
        id="TextInput" 
        label="Emergency Number(s) to Text &#128241;" 
        variant="outlined" 
        value={textNumbers.join()}
        inputProps={{style: { textAlign: 'center' }}}
        >
        </TextField>
        <Typography variant="body2">seperate each number with a comma<br />e.g. "4408379929,7739939992"</Typography>
      </Drawer>

      {/*Header*/}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {setSettingsOpen(true)}}>
            <SettingsIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <center> WalkSafe &#8962; </center>
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {/*CallInput*/}
        <Typography className={classes.directions} variant="body2">click red button to call your emergency contact below</Typography>
        <TextField 
        className={classes.callInput} 
        onInput={(e) => {if(/^\d+$/.test(e.target.value)){setCallNumber(e.target.value); localStorage.set("wsh-call",e.target.value);}}} 
        id="CallInput" 
        label="Emergency Number to Call &#9742;" 
        variant="outlined" 
        value={callNumber}
        inputProps={{style: { textAlign: 'center' }}}
        >
        </TextField>
        <Typography variant="body2">the number you enter will be autosaved on your phone</Typography>

        {/*GeoLocation*/}
        <hr />
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) =>
            <div>
              {/*PanicButton*/}
              <Button onClick={() => {getCurrentPosition(); handlePanic()}} ><img src={panicBtnPressed ? PanicButtonPressedImg : PanicButtonImg} alt="Panic Button" /></Button> <br />
              {panicBtnPressed ? 
                <Typography className={classes.alertText} variant="body2">panic button pressed!<br />help texts sent to below numbers</Typography>
              : <div></div>}
              {error &&
                <Typography className={classes.alertText} variant="body2">
                  {error.message}
                </Typography>}
              <Typography variant="body2">
                LATITUDE: {isNaN(parseFloat(latitude)) ? <div></div> : parseFloat(latitude).toFixed(4)}<br />
                LONGITUDE: {isNaN(parseFloat(longitude)) ? <div></div> : parseFloat(longitude).toFixed(4)}
              </Typography>
            </div>}
        />

        {/*TextsInput*/}
        <hr />
        <Typography variant="body2">numbers texted when the panic button pressed:</Typography>
        <List dense={true}>
          {textNumbers.map(e => 
            <ListItem>
            <ListItemIcon>
                <MessageIcon />
            </ListItemIcon>
            <ListItemText primary={e}></ListItemText>
          </ListItem>
          )}
        </List>
        <Typography variant="body2">to edit, click the settings gear icon on the top-left</Typography>

        {/*Footer*/}
        <hr />
        <Typography variant="body2">
          made with &hearts; by Shrey Ravi for free<br />
          WalkSafe &#8962; is not a replacement for law enforcement/safety<br />
          <a href="https://www.shreyravi.com/contact.html">Contact</a> | <a href="#">Legal</a> | <a href="https://github.com/ShreyRavi/walk-safe-home">GitHub</a> | <a href="https://github.com/ShreyRavi/walk-safe-home/commit/cdab0072a54bd6e8f479ee4489367fb4d9f66eed">v1.0</a>
        </Typography>

      
      </Grid>
    </div>
  );
}

export default App;