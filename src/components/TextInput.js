import React from 'react';
import EditableList from 'react-list-editable';
import 'react-list-editable/lib/react-list-editable.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const TextInput = ({textNumbers, setTextNumbers}) => {
    const classes = useStyles();
    const onListChange = (newTextNumbers) => {
        if(newTextNumbers.length <= 10){
            setTextNumbers(newTextNumbers);
        }
    }
    return(
        <div className={classes.root}>
            <Typography variant="body2" className={classes.directions}>
                Enter number(s) to text:
            </Typography>
            <EditableList 
                list={textNumbers}
                onListChange={onListChange}
                placeholder="Press Enter to Add"
            />
        </div>
    );
}

export default TextInput;