import React from 'react';
import { Divider, Typography } from '@material-ui/core';

const Footer = (classes) => {
    return(
        <div>
            <Divider className={classes.divider} />
            <Typography variant="body2">
            Made with &hearts; by Shrey Ravi<br />
            WalkSafe &#8962; is not a replacement for law enforcement/safety<br />
            <a className={classes.links} href="https://www.shreyravi.com/contact.html">Contact</a> | <a className={classes.links} href="#">Legal</a> | <a className={classes.links} href="https://github.com/ShreyRavi/walk-safe-home">GitHub</a> | <a className={classes.links} href="https://github.com/ShreyRavi/walk-safe-home/commits/master">Version 3</a>
            </Typography>
        </div>
    );
}

export default Footer;