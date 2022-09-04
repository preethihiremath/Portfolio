import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
navbar :{
        display:'flex', 
        padding:'0 4rem',
        justifyContent:'space-between'
},
navbarBrand :{
 display:'flex',
},

navbarMenu :{
    display:'flex',  
    listStyle:'none',
    justifyContent:'right',
    
},
navLink :{
    fontFamily:'sans-serif',
    textDecoration:'none',
    margin:'0 2rem',
    fontSize:'1rem',
    '@media screen and (max-width:654px)':{
        display:'none'
     }

}
});
export default useStyles;