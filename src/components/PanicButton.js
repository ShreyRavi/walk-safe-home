import React from 'react';
import Geolocation from 'react-geolocation';
import { Fab, Snackbar, Typography } from '@material-ui/core';
import Alert from './Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

const PanicButton = ({handlePanic, panicBtnPressed, handleCloseError, handleCloseSuccess}) => {
    const classes = useStyles();
    return(
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
                <Snackbar open={panicBtnPressed} autoHideDuration={15000} onClose={handleCloseSuccess}>
                  <Alert onClose={handleCloseSuccess} severity="success">
                    Panic button pressed, help texts sent to selected numbers!
                  </Alert>
                </Snackbar>
              : <div></div>}
              {error && <Snackbar open={panicBtnPressed} onClose={handleCloseError} autoHideDuration={15000}> 
                <Alert onClose={handleCloseError} severity="error">
                  {error.message}
                </Alert>
              </Snackbar>}
              <Typography className={classes.hidden} variant="body2">
                LATITUDE:  {parseFloat(latitude).toFixed(4)}<br />
                LONGITUDE: {parseFloat(longitude).toFixed(4)}
              </Typography>
            </div>}
        />
    );
}
export default PanicButton;