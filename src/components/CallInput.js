import React, { useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    callInput: {
        width: "80%",
        textAlign: "center",
      },
      directions: {
        fontWeight: 'bolder',
        marginTop: '10px',
      },
}));

const CallInput = ({callNumber, setCallNumber, localStorage}) => {
    const classes = useStyles();
    useEffect(() => {
        if(localStorage("wsh-call") != null){
          setCallNumber(localStorage.get("wsh-call"));
        }
      }, []);
    return(
        <div>
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
        </div>
    );
}

export default CallInput;