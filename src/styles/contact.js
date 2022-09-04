import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
contact:{
padding:'8rem 4rem 0',
background:'#0d122b',
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:"center",
margin:'0',
color:'white',
position :'relative',
},
logo: {
fontSize:'60px'
},
text :{
fontSize:'1.5rem',
textAlign:'center'

},
iconsList:{
listStyle:'none',
display:'flex',
flexDirection:'row',
justifyContent:'center',
alignItems:'center'
},
icon :{
padding:'0.5rem',
margin:'1rem',
border:'1px solid #68D4A4',
borderRadius:'50%',
backgroundColor:'#68D4A4'
},
iconEle :{
color:'white'
},
copyright:{
    fontSize:'14px'
}
});
export default useStyles;