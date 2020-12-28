
import { makeStyles} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core/';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#ffff00',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffff00',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ffff00',
      },
      '&:hover fieldset': {
        borderColor: '#ffff00',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffff00',
      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
    alignItems: 'center',
    background: 'linear-gradient(10deg, #212121, #01579b 100%)',
    margin: theme.spacing(1),
    padding: theme.spacing(5),
    color: '#ffff00',
    border: '2px solid black',
    borderRadius:"40%",
    boxShadow: theme.shadows[20]
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: '#ffff00',
    borderRadius:"100px",
    margin: theme.spacing(1),
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#ffff00',
    margin:"auto"
  },
}));

export  {useStyles,CssTextField }