import React from 'react'
import useStyles from '../../styles/start';
import {Button } from '@material-ui/core'
import { useMediaQuery ,useTheme} from '@material-ui/core';

const Contact =({darkTheme})=>{
    const classes=useStyles();
    const theme= useTheme();
    const showText = useMediaQuery(theme.breakpoints.up('md'));
    return (
   <section className={classes.start}>
      <h1 classes={classes.heading}> Project On your mind ?</h1>
      { showText && <p classes={classes.para}>Interested In working together for a project? We should discuss the tech stacks. I'll buy the coffee</p>}
      <Button variant="contained" style={{backgroundColor:'#68D4A4'}}classes={classes.button} onClick={() => window.location = 'mailto:preethivhiremath.vh@gmail.com'}>Mail the Details</Button>
   </section>
    );
}
export default Contact;
