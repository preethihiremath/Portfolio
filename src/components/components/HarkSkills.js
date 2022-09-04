import React from 'react'
import useStyles from '../../styles/hardskill';
import {Divider} from '@material-ui/core';
import LayersIcon from '@material-ui/icons/FirstPage';
import MobileFriendlyIcon from '@material-ui/icons/Storage';
import YoutubeSearchedForIcon from '@material-ui/icons/Apps';
import Code from '@material-ui/icons/Code';

const HardSkills= ({darkState}) => {
const classes= useStyles();
return (
  <section className={classes.blog}  >
    <h1 className={classes.heading} style={{color:darkState? 'white': 'black'}} id="HardSkills"> HardSkills </h1>
    <Divider  />

    <div className={classes.skills}>
 
    <div className={classes.design}> 
            <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
               <LayersIcon />
            <h1>ReactJS</h1>
           
            </div>
        </div>
        <div className={classes.responsive}> 
            <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
                <MobileFriendlyIcon />
            <h1>NodeJs</h1>
           
            </div>
        </div>

        <div className={classes.seo}> 
            <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
            <YoutubeSearchedForIcon />
            <h1>Android App Dev</h1>
            </div>
        </div>
        
    </div>
    <div className={classes.skills}>
 
 <div className={classes.design}> 
         <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
            <Code />
         <h1>MongoDB</h1>
        
         </div>
     </div>
     <div className={classes.responsive}> 
         <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
             <Code />
         <h1>Java</h1>
        
         </div>
     </div>

     <div className={classes.seo}> 
         <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
         <Code />
         <h1>C</h1>
         </div>
     </div>
     
 </div>
  </section>
)
};


export default HardSkills;
