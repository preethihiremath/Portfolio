import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({

blog:{
padding:'0 4rem',
margin:'-2rem auto',
height:'100vh',
'@media screen and (max-width:654px)':{
    padding:'0',
    height:'auto',
    marginBottom:'30px'
}
},

heading: {
textAlign:'left',
fontSize:'40px',
'@media screen and (max-width:654px)':{
    textAlign:'center',
}
},
skills :{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    '@media screen and (max-width:654px)':{
        flexDirection:'column'
    }
},
list :{
    width:'250px',
    margin:'40px',
    listStyle:'none',
    borderRadius:'25px',
    // backgroundColor:'#68D4A4',
    padding:'2rem',
    textAlign:'center'
},

listElement :{
    fontSize:'1rem',
    marginTop:'10px',
}
});
export default useStyles;