import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

//Alert from Material-UI Labs
const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default Alert;