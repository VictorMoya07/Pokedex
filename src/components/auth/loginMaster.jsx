import React, { useState, useContext, useEffect } from 'react';
import LoginMasterContext from '../../context/auth/loginMasterContext';
import AlertContext from '../../context/alerts/alertContext';
import  ModalContext  from '../../context/modal/modalContext';
import { Typography, Container , Paper, Button } from '@material-ui/core/';
import  {useStyles, CssTextField} from '../../assets/styles/components/LoginMasterStyle';
import { useTranslation } from "react-i18next";
import { Alert } from '@material-ui/lab/';




const LoginMaster = (props) => {

    const {t,i18n} = useTranslation("global");

    const modalContext = useContext(ModalContext);
    const { changeLng } = modalContext;
    console.log(changeLng);
    const loginMasterContext = useContext(LoginMasterContext);
    const { logInFn, login, } = loginMasterContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;
    
    const [user, saveUser] = useState({
        userId: ''
    });

    const { userId} = user;

    useEffect(() => {
      if (login) {
        props.history.push('/home');
        }  
    },[login, props.history]);

    const onChange = e => {
      saveUser({
        ...user,
        [e.target.name]: e.target.value
      })
    }

    const onSubmit = e => {
      e.preventDefault();
      if (userId.trim() === '') {
        showAlert(t("msgAlert"));
        return;
      }
      logInFn(user);
    };

    const setLeng = (lng) =>{
      i18n.changeLanguage(lng);
      changeLng(lng)
    }
  
    const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography data-testid="title" variant="h3">
          Pokemon
        </Typography>
        {alert ? (<Alert severity="error">{alert.msg}</Alert>) : null}
        <form className={classes.form} onSubmit={onSubmit} >
          <CssTextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="userId"
            label={t("master")}
            name="userId"
            autoComplete="userId"
            value={userId}
            onChange={onChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >{t("signIn")}
          </Button>
        <div>
          <Button
            variant="contained"
            className={classes.submit}
            onClick={()=>setLeng("en")}
            >EN
          </Button>
          
          <Button
            variant="contained"
            className={classes.submit}
            onClick={()=>setLeng("es")}
            >ES
          </Button>
            
        </div>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginMaster;