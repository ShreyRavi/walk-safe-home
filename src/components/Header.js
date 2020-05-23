import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {

    },
    title: {
        flexGrow: 1,
    },
    menuButton: {

    },
}));

const Header = ({setHelpOpen, setSettingsOpen}) => {
    const classes = useStyles();
    return(
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
    );
}

export default Header;