import React, {useEffect, useContext} from 'react';
import LoginMasterContext from '../../context/auth/loginMasterContext';
import PokemonList from '../pokemonList/pokemonList'
import clsx from 'clsx';
import { Drawer, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, List, Typography, IconButton, Container,
  Grid, 
} from '@material-ui/core/';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LanguageIcon from '@material-ui/icons/Language';
import ColorizeIcon from '@material-ui/icons/Colorize';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useTranslation} from "react-i18next";
import  ModalContext  from '../../context/modal/modalContext';
import { ThemeProvider } from '@material-ui/core/styles';
import  {useStyles , theme} from '../../assets/styles/components/homeStyle';


const Home = (props) => {

  const {t,i18n} = useTranslation("global");

  //Manejo del changeLng para manejar los idiomas
  const modalContext = useContext(ModalContext);
  const {changeLng} = modalContext;

  //Manejo de user
  const loginMasterContext = useContext(LoginMasterContext);
  const { getUserLog, userLogin, logOut, setLogOut } = loginMasterContext;

  //Carga de usuario en el front
  useEffect(() => {
    getUserLog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(logOut) {
      props.history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logOut]);

  //Estilos
  const classes = useStyles();
  
  
  const setLeng = (lng) =>{
    i18n.changeLanguage(lng);
    changeLng(lng)
  }

  // Manejo de Drawer
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };  

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6"  className={classes.title}>
            {t("welcomeMaster")} <strong>{userLogin}</strong> 
          </Typography>
          <Typography component="h1" variant="h6"  className={classes.title}>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
       
        <List>
          <ListItem button onClick={()=>setLeng("en")} >
          <ListItemIcon>
              <ColorizeIcon color ='primary' />
            </ListItemIcon>
              <ListItemText primary="English" />
          </ListItem>
          <ListItem button onClick={()=>setLeng("es")} >
          <ListItemIcon>
              <LanguageIcon color ='primary' />
            </ListItemIcon>
              <ListItemText primary="Spanish" />
          </ListItem>
          <ListItem button onClick={()=>setLogOut()} >
          <ListItemIcon>
              <ExitToAppIcon color ='primary' />
            </ListItemIcon>
              <ListItemText primary={t("logOut")} />
          </ListItem>
          </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <PokemonList/>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
    </ThemeProvider>
  );
}


export default Home;