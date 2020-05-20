import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Footer = () => {
    return (
        <Grid
         container
         direction="column"
         justify="center"
         alignItems="center"
        >
            <Typography variant="body1">
                we do not collect any of your data &hearts; stay safe
            </Typography>
            <Divider />
            <Typography variant="caption">
                made by Shrey Ravi <br /> WalkSafe &#8962; is not a replacement for law enforcement/safety <br /> <a href="https://www.shreyravi.com/contact/">Contact</a> | <a href="https://www.shreyravi.com/legal/">Legal</a> | <a href="https://github.com/stallamraju/walk-safe-home">GitHub</a> | v1.0
            </Typography>
        </Grid>
    );
}

export default Footer;