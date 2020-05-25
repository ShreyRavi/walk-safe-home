import React from 'react';
import { Drawer, Grid, Typography, IconButton, Divider } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SettingsIcon from '@material-ui/icons/Settings';
import Footer from './Footer';
import walksafeHomeImg from '../screenshots/walksafeHome.png';
import walksafeSettingsImg from '../screenshots/walksafeSettings.png';
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    helpDrawer: {
        width: '100%',
        height: '300%',
        padding: '40px',
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

const HelpDrawer = ({helpOpen, setHelpOpen}) => {
    const classes = useStyles();
    return(
    <Drawer
      anchor="left"
      className={classes.helpDrawer}
      open={helpOpen}
      onClose={() => {setHelpOpen(false)}}
    >
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
        <Typography variant="h4">
          Welcome to WalkSafe &#8962;
        </Typography>
      </Grid>

      <Divider className={classes.divider} />

      <Typography variant="body1">
        WalkSafe &#8962; is a personal safety app that calls and texts your emergency contacts with the click of just one button! <br />

        <Image
          style={{
            width: '150px',
            height: '200px',
            backgroundColor: 'transperant',
            border: '1px solid black',
            margin: '10px auto 10px auto',
          }}
          src={walksafeHomeImg}
        />

        When the panic button is clicked, one contact of your choice will be called from your phone. <br /><br />
        In addition, up to 5 other number(s) will be texted an SOS message automatically from our service.<br />

        <Image
          style={{
            width: '150px',
            height: '200px',
            backgroundColor: 'transperant',
            border: '1px solid black',
            margin: '10px auto 10px auto',
          }}
          src={walksafeSettingsImg}
        />

        To edit the number(s) to call/text, click on the settings icon (<SettingsIcon />) on the top right of the screen. <br />
      </Typography>

      <Footer classes={classes} />

      </div>
    </Drawer>
    );
}

export default HelpDrawer;