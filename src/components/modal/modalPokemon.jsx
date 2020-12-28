import React, { useContext,  useState, } from 'react';
import  ModalContext  from '../../context/modal/modalContext';
import  {useStyles, getModalStyle}  from '../../assets/styles/components/modalPokemonStyle';
import {useTranslation} from "react-i18next";
import { Modal, Card, CardActionArea, CardActions, CardContent, CardMedia, Button,Typography } from '@material-ui/core/';



const ModalPokemon = () => {
 
  const {t} = useTranslation("global");
  const [ modalStyle ] = useState(getModalStyle);
  const classes = useStyles();

  const modalContext = useContext(ModalContext);
  const { saveIdPokemon,  infoPokemon, abilities,  descrip,  handleClose,
  open } = modalContext;
  
  return (
        <div>
            <Modal
            open={open}
            onClose={() => {
              saveIdPokemon(null);
              handleClose(false);
            }}
             >
          <div style={modalStyle} className={classes.paper}>
            <Card >
            <CardActionArea className={classes.root}>
            <CardMedia
              component="img"
              image={`https://pokeres.bastionbot.org/images/pokemon/${infoPokemon.id}.png`}
              className={classes.media_modal}
            />
            <CardContent>
              <Typography variant="h4" component="h2" className={classes.tittle}>
                {infoPokemon.name}
              </Typography>
              <Typography  variant="h6" component="h2">
              {t("description")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               {descrip} 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {t("heigh")} {infoPokemon.height} 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {t("width")} {infoPokemon.weight} 
              </Typography>
              <Typography variant="h6" component="h2">
                {t("abilities")}
                </Typography>
              {abilities.map(e => (
                <div>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>{t("name")}:</strong>{e.nombre}  
                  </Typography>

                  <Typography variant="body2" color="textSecondary" component="p">
                    <strong>{t("details")}:</strong>{e.descri} 
                  </Typography>
                </div>
              ))
              }
              <Typography variant="h6" component="h2">
                {t("images")}
                </Typography>
               <div>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${infoPokemon.id}.png`} className={classes.media} alt={infoPokemon.name}  />
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${infoPokemon.id}.png`} className={classes.media}  alt={infoPokemon.name} />
                </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="medium" variant="contained" fullWidth color="primary" 
              onClick={()=>{
                saveIdPokemon(null);
                  handleClose(false);
              }} >
              {t("close")}
            </Button>
          </CardActions>
          </Card>
        </div>            
      </Modal>
    </div>
    )
}

export default ModalPokemon
