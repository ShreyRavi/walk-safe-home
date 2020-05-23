import React, { useState, useEffect } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MessageIcon from '@material-ui/icons/Message';
import Geolocation from 'react-geolocation';
import Fab from '@material-ui/core/Fab';
import red from '@material-ui/core/colors/red';
import CssBaseline from "@material-ui/core/CssBaseline";
import Snackbar from '@material-ui/core/Snackbar';
import Divider from '@material-ui/core/Divider';

//Alert from Material-UI Labs
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F44335',
    },
    primary: red,
    secondary: {
      main: '#F44335',
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
  menuButton: {

  },
  title: {
    flexGrow: 1,
  },
  callInput: {
    width: "80%",
    textAlign: "center",
  },
  alertText: {
    color: "red",
  },
  directions: {
    fontWeight: 'bolder',
    marginTop: '10px',
  },
  helpDrawer: {
    width: '100%',
    height: '100%',
    padding: '40px',
    backgroundColor: '#F44335',
  },
  settingsDrawer: {
    width: '100%',
    height: '100%',
    padding: '40px',
    backgroundColor: '#F44335',
  },
  appBar: {

  },
  panicButton: {
    marginTop: '70%',
    width: '300px',
    height: '300px',
    fontSize: '190px',
  },
  panicButtonText: {
    marginTop: '-30px',
  },
  hidden: {
    visibility: 'hidden',
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
  const classes = useStyles();
  var localStorage = require('local-storage');
  //local storage keys: wsh-call, wsh-text
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
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
  const handleCloseSnackbar = (e, r) => {
    if (r === 'clickaway') {
      return;
    }
    setPanicBtnPressed(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/*Help Drawer*/}
      <Drawer
        anchor="left"
        className={classes.helpDrawer}
        open={helpOpen}
        onClose={() => {setHelpOpen(false)}}
      >
        {/*Help Content*/}
        <div className={classes.helpDrawer}>
        <Grid 
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <IconButton onClick={() => {setHelpOpen(false)}}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h3">
            Welcome to WalkSafe &#8962;
          </Typography>
        </Grid>

        <Divider className={classes.divider} />

        <Typography variant="body1">
          WalkSafe &#8962; is a personal safety app that calls and texts your emergency contacts with the click of just one button! <br />
          When the panic button is clicked, one contact of your choice will be called from your phone. <br />
          In addition, up to 10 other numbers will be texted an SOS message automatically from our service about you. <br />
          To edit the number to call/text automatically, click on the settings gear (<SettingsIcon />) on the top right of the screen. <br />
        </Typography>

        {/*Help - Footer*/}
        <Divider className={classes.divider} />
        <Typography variant="body2">
          Made with &hearts; by Shrey Ravi<br />
          WalkSafe &#8962; is not a replacement for law enforcement/safety<br />
          <a className={classes.links} href="https://www.shreyravi.com/contact.html">Contact</a> | <a className={classes.links} href="#">Legal</a> | <a className={classes.links} href="https://github.com/ShreyRavi/walk-safe-home">GitHub</a> | <a className={classes.links} href="https://github.com/ShreyRavi/walk-safe-home/commits/master">Version 2</a>
        </Typography>

        </div>
      </Drawer>

      {/*Setting Drawer*/}
      <Drawer
        anchor="right"
        className={classes.settingsDrawer}
        open={settingsOpen}
        onClose={() => {setSettingsOpen(false)}}
      >
        <div className={classes.settingsDrawer}>
        <Grid 
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <IconButton onClick={() => {setSettingsOpen(false)}}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h3">
            WalkSafe &#8962; Settings
          </Typography>
        </Grid>

        <Divider className={classes.divider} />

        {/*Settings - CallInput*/}
        <Typography className={classes.directions} variant="body2">Enter number to call:<br /></Typography>
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
        <Divider className={classes.divider} />
        <Typography className={classes.directions} variant="body2">Enter number(s) to text:<br /></Typography>
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
        <Typography variant="body2">seperate each number with a comma<br />e.g. "4408379929,7739939992"<br /></Typography>

        {/*Settings - TextsShow*/}
        <Divider className={classes.divider} />
        <Typography variant="body2">Numbers texted when the panic button pressed:</Typography>
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

        {/*Settings - Footer*/}
        <Divider className={classes.divider} />
        <Typography variant="body2">
          Made with &hearts; by Shrey Ravi<br />
          WalkSafe &#8962; is not a replacement for law enforcement/safety<br />
          <a href="https://www.shreyravi.com/contact.html">Contact</a> | <a href="#">Legal</a> | <a href="https://github.com/ShreyRavi/walk-safe-home">GitHub</a> | <a href="https://github.com/ShreyRavi/walk-safe-home/commits/master">Version 2</a>
        </Typography>

        </div>
      </Drawer>

      {/*Header*/}
      <AppBar className={classes.appBar} position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.helpButton} color="inherit" aria-label="menu" onClick={() => {setHelpOpen(true)}}>
            <HelpIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <center> WalkSafe &#8962; </center>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => {setSettingsOpen(true)}}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >

        {/*GeoLocation + Panic Button*/}
        <Geolocation
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) =>
            <div>
              {/*PanicButton*/}
              <Fab className={classes.panicButton} size="large" variant="round" color="primary" onClick={() => {getCurrentPosition(); handlePanic()}}><div className={classes.panicButtonText}>&#8962;</div></Fab>
              {panicBtnPressed ? 
                <Snackbar open={panicBtnPressed} autoHideDuration={15000} onClose={handleCloseSnackbar}>
                  <Alert onClose={handleCloseSnackbar} severity="success">
                    Panic button pressed, help texts sent to selected numbers!
                  </Alert>
                </Snackbar>
              : <div></div>}
              {error && <Snackbar open={panicBtnPressed} onClose={handleCloseSnackbar} autoHideDuration={15000}> 
                <Alert onClose={handleCloseSnackbar} severity="error">
                  {error.message}
                </Alert>
              </Snackbar>}
              <Typography className={classes.hidden} variant="body2">
                LATITUDE:  {parseFloat(latitude).toFixed(4)}<br />
                LONGITUDE: {parseFloat(longitude).toFixed(4)}
              </Typography>
            </div>}
        />
        {/*<br /><br />
        <Typography variant="body2">made by Shrey Ravi &hearts; stay safe</Typography>*/}
      
      </Grid>
    </ThemeProvider>
  );
}

export default App;