import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const useStyles = makeStyles((theme) => ({
    callInput: {
        width: "100%",
        textAlign: "center",
    },
    directions: {
        fontWeight: 'bolder',
        marginBottom: '10px',
    },
}));

const CallInput = ({callNumber, setCallNumber, localStorage}) => {
    const classes = useStyles();
    useEffect(() => {
        if(localStorage("wsh-call") != null){
          setCallNumber(localStorage.get("wsh-call"));
        }
      }, []);
    useEffect(() => {
        localStorage.set("wsh-call", callNumber);
    }, [callNumber]);
    return(
        <div>
            <Typography className={classes.directions} variant="body2">Enter number to call:</Typography>
            <PhoneInput 
                placeholder="Enter number to call"
                defaultCountry="US"
                value={callNumber}
                onChange={setCallNumber}
            />
        </div>
    );
}

export default CallInput;