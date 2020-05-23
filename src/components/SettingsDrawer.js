import React from 'react';
import { Drawer, Grid, IconButton, Typography, Divider, TextField, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Footer from './Footer';
import CallInput from './CallInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    settingsDrawer: {
        width: '100%',
        height: '100%',
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

const SettingsDrawer = ({settingsOpen, setSettingsOpen, callNumber, setCallNumber, textNumbers, setTextNumbers}) => {
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

            <Footer classes={classes} />

            </div>
        </Drawer>
    );
}
export default SettingsDrawer;