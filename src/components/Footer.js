import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    links: {
        textDecoration: 'none',
    },
}));

const Footer = ({}) => {
    const classes = useStyles();
    return(
        <div>
            <Divider className={classes.divider} />
            <Typography variant="body2">
            Made with &hearts; by Shrey Ravi<br />
            WalkSafe &#8962; is not a replacement for law enforcement/safety<br />
            <Link color="info" className={classes.links} href="https://www.shreyravi.com/contact.html">Contact</Link> | <Link color="info" className={classes.links} href="#">Legal</Link> | <Link color="info" className={classes.links} href="https://github.com/ShreyRavi/walk-safe-home">GitHub</Link> | <Link color="info" className={classes.links} href="https://github.com/ShreyRavi/walk-safe-home/commits/master">Version 5</Link>
            </Typography>
        </div>
    );
}

export default Footer;