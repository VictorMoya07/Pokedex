import { makeStyles} from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50 ;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(360deg, #fff 50%, #01579b 70%)',
    },
    media_modal:{
      height: '100%',
      margin: 'auto',
      width:'40%'
    },
    media:{
      height: '30%',
      margin: 'auto',
      width:'25%'
    },
    tittle:{
      textAlign:'center',
      margin:'auto'
    },
    paper: {
      position: 'absolute',
      boxShadow: theme.shadows[20],
      padding: theme.spacing(1),
      border:'1px solid white',
      width:'450px' 
    },
    
    footerRefrest:{
      '& > *': {
        margin: theme.spacing(1),
        
      },
      width:"100%",
      justifyContent:"center",
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft:theme.spacing(6)
    },
    '@media (max-width: 600px)': {
      paper: {
        width: '70%'
      },
      media:{
        width:'25%'
      }
    }
  
    
  }));

export {useStyles, getModalStyle}