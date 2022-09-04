import React,{useState} from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Project from './components/Projects'
import Contact from './components/Contact';
import Services from './components/Services';
import {ThemeProvider,createTheme} from '@material-ui/core';
import HardSkills from './components/HarkSkills';
const MainComponent =()=>{
    const [darkState,setDarkState]=useState(true);
    const palletType=darkState ? "dark":"light";
    const mainPrimary=darkState ? '#0D1B34': '#D6D6D6';
    const mainSecondary=darkState?'#90afff':'#F2C4CE';
    document.querySelector('body').style.backgroundColor=mainPrimary;

    const theme =createTheme(
      {
        palette :{
          type:palletType,
          primary:{
            main:mainPrimary,
          },
          secondary:{
            main:mainSecondary
          }
        }
      }
    );
    const handleThemeChange =()=>{
        setDarkState(!darkState);
      
      }
    return (
        <>
        <ThemeProvider theme={theme}>
            <NavBar darkState={darkState} handleThemeChange={handleThemeChange} />
            <Hero darkState={darkState} />
            <Project darkState={darkState} />
            <Services darkState={darkState} />
            <HardSkills darkState={darkState} />
            <Contact />
        </ThemeProvider>
        
        </>
    );
}
export default MainComponent;