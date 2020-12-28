import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: 'linear-gradient(90deg, #212121 50%, #01579b 90%)'
    },
    
    media:{
      height: '100%',
      margin: 'auto',
    },
  
    gridList: {
      width:'100%',
      height: '79vh'
    },
   
    paper: {
      position: 'absolute',
      width: 450,
      boxShadow: theme.shadows[20],
      padding: theme.spacing(5),
      border:'1px solid ' 
    },
    card:{
      maxWidth: 645,
    },
    footerRefrest:{
      '& > *': {
        margin: theme.spacing(1),
        
      },
      width:"100%",
      justifyContent:"center",
      display: 'flex',
      flexWrap: 'wrap',
    },
  
    
  }));

export default useStyles