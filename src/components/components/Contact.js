import React from 'react'
import useStyles from '../../styles/contact';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import StartProject from './StartProject';

const Contact =()=>{
    const classes=useStyles();
    
    return (
   <section className={classes.contact}  id="contact">
      <StartProject />
      <AcUnitIcon className={classes.logo} />
       <p className={classes.text}>Living ,Learning and Leveling Up<br /> One day at a time</p>
       <ul className={classes.iconsList}> 
       <li className={classes.icon}><a href="https://twitter.com/butterbluebeach" className={classes.iconEle}><TwitterIcon /></a></li>
       <li className={classes.icon}><a href="https://www.linkedin.com/in/preethi-v-hiremath-a04a071b5" className={classes.iconEle}><LinkedInIcon /></a></li>
       <li className={classes.icon}><a href="https://github.com/preethihiremath" className={classes.iconEle}><GitHubIcon /></a></li>
       <li className={classes.icon}><a href="https://www.instagram.com/preethi_hiremath/" className={classes.iconEle}><InstagramIcon /></a></li>
       </ul>
       <p>Made  by Preethi V Hiremath </p>
   </section>
    );
}
export default Contact;
