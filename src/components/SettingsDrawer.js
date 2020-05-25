import React from 'react';
import { Drawer, Grid, IconButton, Typography, Divider } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Footer from './Footer';
import CallInput from './CallInput';
import TextInput from './TextInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    settingsDrawer: {
        width: '100%',
        height: '100%',
        padding: '40px',
        backgroundColor: '#F44335',
    },
    directions: {
        fontWeight: 'bolder',
        marginBottom: '10px',
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    links: {
        textDecoration: 'none',
    },
}));

const SettingsDrawer = ({settingsOpen, setSettingsOpen, callNumber, setCallNumber, textNumber1, textNumber2, textNumber3, textNumber4, textNumber5, setTextNumber1, setTextNumber2, setTextNumber3, setTextNumber4, setTextNumber5}) => {
    const classes = useStyles();
    var localStorage = require('local-storage');
    return(
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
                <Typography variant="h4">
                WalkSafe &#8962; Settings
                </Typography>
            </Grid>

            <Divider className={classes.divider} />

            <CallInput 
                callNumber={callNumber}
                setCallNumber={setCallNumber}
                localStorage={localStorage}
            />

            <Divider className={classes.divider} />

            <TextInput
                closeSettings={() => {setSettingsOpen(false)}}
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

            <Footer classes={classes} />

            </div>
        </Drawer>
    );
}
export default SettingsDrawer;