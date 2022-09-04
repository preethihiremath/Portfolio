import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
start:{
    padding:'2rem',
    width:'80%',
    backgroundColor:'#0D1B34',
    border:'1px solid #0D1B34',
    borderRadius:'25px',
    color:'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    zIndex:'5',
    position:'absolute',
    top:'-40px',
    fontFamily:'sans-serif',
},
heading:{
fontSize:'40px',
},
para:{
    textAlign:'center',
    fontFamily:'sans-serif',
},
button:{
    borderRadius:'5%',
    backgroundColor:'#68D4A4'

}
});
export default useStyles;