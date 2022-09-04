import React from 'react'
import {AppBar,Toolbar,Typography} from '@material-ui/core'
import useStyles from '../../styles/navbar';

import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import BrightnessLowOutlinedIcon from '@material-ui/icons/BrightnessLowOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const NavBar =({darkState,handleThemeChange})=>{
  const classes = useStyles();
  const icon= darkState ?<BrightnessLowOutlinedIcon/> : <Brightness2OutlinedIcon />

    return (
      <AppBar>
        <Toolbar className={classes.navbar}>
          <div className={classes.navbarBrand}>
            <AcUnitIcon  style={{fontSize:'30px'}}/>
             <Typography variant="h6" style={{marginLeft:'30px'}}>My Portfolio</Typography>
          </div>
            <ul className={classes.navbarMenu}>
              <li><a href="#hero" className={classes.navLink} style={{color:darkState? 'white': 'black'}}>Home</a> </li>
              <li><a href="#projects" className={classes.navLink} style={{color:darkState? 'white': 'black'}}>Projects</a> </li>
              <li><a href="#services" className={classes.navLink} style={{color:darkState? 'white': 'black'}}>Services</a> </li>
              <li><a href="#contact" className={classes.navLink} style={{color:darkState? 'white': 'black'}}>Contact</a> </li>
              <li onClick={handleThemeChange}>{icon} </li>
            </ul>
        </Toolbar>
      </AppBar>
 
     
    );
}
export default NavBar;