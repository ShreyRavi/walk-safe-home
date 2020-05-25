import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import 'react-list-editable/lib/react-list-editable.css';
import { Typography, Snackbar, setRef } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        listStyle: 'none',
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    directions: {
        fontWeight: 'bolder',
        marginBottom: '10px',
    },
}));

const TextInput = ({textNumber1, textNumber2, textNumber3,textNumber4, textNumber5, setTextNumber1, setTextNumber2, setTextNumber3, setTextNumber4, setTextNumber5, closeSettings}) => {
    const classes = useStyles();
    const [showError, setShowError] = useState(false);
    const [errorMsg, editErrorMsg] = useState("");
    var localStorage = require('local-storage');
    const forceUpdate = () => {
        setTimeout(() => {
            closeSettings();
        }, 2000);
    }
    useEffect(() => {
        if(localStorage("wsh-text") == null){
            localStorage.set("wsh-text", ",,,,");
        }
        let getLSnums = localStorage.get("wsh-text").split(",");
        getLSnums[0] = textNumber1;
        localStorage.set("wsh-text", getLSnums.join());

    }, [textNumber1]);
    useEffect(() => {
        if(localStorage("wsh-text") == null){
            localStorage.set("wsh-text", ",,,,");
        }
        let getLSnums = localStorage.get("wsh-text").split(",");
        getLSnums[1] = textNumber2;
        localStorage.set("wsh-text", getLSnums.join());

    }, [textNumber2]);
    useEffect(() => {
        if(localStorage("wsh-text") == null){
            localStorage.set("wsh-text", ",,,,");
        }
        let getLSnums = localStorage.get("wsh-text").split(",");
        getLSnums[2] = textNumber3;
        localStorage.set("wsh-text", getLSnums.join());

    }, [textNumber3]);
    useEffect(() => {
        if(localStorage("wsh-text") == null){
            localStorage.set("wsh-text", ",,,,");
        }
        let getLSnums = localStorage.get("wsh-text").split(",");
        getLSnums[3] = textNumber4;
        localStorage.set("wsh-text", getLSnums.join());

    }, [textNumber4]);
    useEffect(() => {
        if(localStorage("wsh-text") == null){
            localStorage.set("wsh-text", ",,,,");
        }
        let getLSnums = localStorage.get("wsh-text").split(",");
        getLSnums[4] = textNumber5;
        localStorage.set("wsh-text", getLSnums.join());

    }, [textNumber5]);
    const handleErrorClose = (e, r) => {
        if (r === 'clickaway') {
            return;
          }
        setShowError(false);
    }
    return(
        <div className={classes.root}>
            <Typography variant="body2" className={classes.directions}>
                Enter number(s) to text:
            </Typography>
            
            <PhoneInput 
                placeholder="Enter number to text"
                value={textNumber1}
                defaultCountry="US"
                onChange={setTextNumber1}
            />
            <PhoneInput 
                placeholder="Enter number to text"
                value={textNumber2}
                defaultCountry="US"
                onChange={setTextNumber2}
            />
            <PhoneInput 
                placeholder="Enter number to text"
                value={textNumber3}
                defaultCountry="US"
                onChange={setTextNumber3}
            />
            <PhoneInput 
                placeholder="Enter number to text"
                value={textNumber4}
                defaultCountry="US"
                onChange={setTextNumber4}
            />
            <PhoneInput 
                placeholder="Enter number to text"
                value={textNumber5}
                defaultCountry="US"
                onChange={setTextNumber5}
            />

            <Snackbar open={showError} autoHideDuration={15000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error">
                    {errorMsg}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default TextInput;