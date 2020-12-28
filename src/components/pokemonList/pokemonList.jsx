import React, { useContext, useEffect } from 'react';
import  PokemonModal from '../modal/modalPokemon';
import PokemonContext from '../../context/pokemonList/pokemonContext';
import  ModalContext  from '../../context/modal/modalContext';
import {GridList, GridListTile, GridListTileBar, IconButton, Fab, useMediaQuery} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useTheme} from '@material-ui/core/styles';
import  useStyles  from '../../assets/styles/components/pokemonListStyle';



const PokemonList = ( ) => {
  
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs", "sm"));

  const pokemonContext = useContext(PokemonContext);
  const { getPokemons, pokemons, morePokemons, lessPokemons, pokemonNumber} = pokemonContext;

  const modalContext = useContext(ModalContext);
  const { saveIdPokemon, handleOpen } = modalContext;
  
  useEffect(() => {
      getPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonNumber] );


  return (

    <div className={classes.root}>
        <GridList cellHeight={240} cols= { matches ? 1 : 2}  className={classes.gridList}>
            {pokemons.map(pokemon => (
              <GridListTile key={pokemon.id}>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} className={classes.media} alt={pokemon.title} />
                    <GridListTileBar
                        title={pokemon.name}
                        actionIcon={
                          <IconButton aria-label={`info about ${pokemon.title}`} onClick={()=>{
                            saveIdPokemon(pokemon.id);
                            handleOpen(true);
                          }}>
                          <InfoIcon color="primary" />
                            </IconButton>
                        }
                    />
              </GridListTile>
            ))}
        </GridList>
        
        <PokemonModal/>
      
      <div className={classes.footerRefrest}>
        <Fab color="primary" aria-label="add" onClick={morePokemons}>
          <AddIcon />
        </Fab>
        {(pokemonNumber === 0) ? null:(
          <Fab color="secondary" aria-label="delete" onClick={lessPokemons}>
            <RemoveIcon />
          </Fab>
        )}
      </div>
  </div>
  );
}

export default PokemonList;