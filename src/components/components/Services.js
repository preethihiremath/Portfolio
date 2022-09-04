import React from 'react'
import useStyles from '../../styles/services';
import {Divider} from '@material-ui/core';
import LayersIcon from '@material-ui/icons/Layers';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';

const Services= ({darkState}) => {
const classes= useStyles();
return (
  <section className={classes.blog}  >
    <h1 className={classes.heading} style={{color:darkState? 'white': 'black'}} id="services"> Services </h1>
    <Divider  />

    <div className={classes.skills}>
 
    <div className={classes.design}> 
            <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
                <LayersIcon />
            <h1>Design and Development</h1>
            <p className={classes.listElement}>Clean modern design optimized for performance and search engines</p>
            </div>
        </div>
        <div className={classes.responsive}> 
            <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
                <MobileFriendlyIcon />
            <h1>Mobile-Friendly</h1>
            <p className={classes.listElement}>Responsive websites built for an optimal user experience that achieves your business goals.</p>
            </div>
        </div>

        <div className={classes.seo}> 
            <div className={classes.list} style={{color:darkState? '#fff': '#000',boxShadow:darkState? '0 0 0 2px #68D4A4 ':'0 0 0 2px black'}}>
            <YoutubeSearchedForIcon />
            <h1>Performance and SEO</h1>
            <p className={classes.listElement}>Make your website fast, easy to find, and reach the widest audience possible.</p>
            </div>
        </div>
    </div>
  </section>
)
};


export default Services;
