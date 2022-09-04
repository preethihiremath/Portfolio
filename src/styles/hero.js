import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
hero:{
height:'100vh',
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
padding:'2rem 4rem 0',

},
heroText :{
fontWeight:700,
},
p:{
textShadow:'3px 3px #68D4A4'
},
heading:{
fontSize:'60px'
},
subHeading:{
fontSize:'1.2rem',
fontWeight:'normal'
},
heroImage:{

},
heroImg:{
width: '300px',
height:'auto',
position:'relative',
left:'-80px'
}
});

export default useStyles;