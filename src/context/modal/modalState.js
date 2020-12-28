import React, { useReducer, useEffect, useContext } from 'react';
import { GET_INFO, GET_IDPOKEMON, GET_INFO_ABILITIES, DELETE_INFO_ABILITIES, GET_INFO_DESCRIP, OPEN_MODAL, CLOSE_MODAL, 
    CHANGE_LNG } from '../../types';
import ModalContext from './modalContext';
import ModalReducer from './modalReducer';
import PokemonContext from '../pokemonList/pokemonContext';
import axios from 'axios';

const ModalState = props => {
    const initialState = {
        infoPokemon:{},
        abilities:[],
        idPokemon:null,
        descrip:'',
        open:false,
        lng:"es"
    }
    
    const pokemonContext = useContext(PokemonContext);
    const { pokemons } = pokemonContext;

    const [state, dispatch] = useReducer( ModalReducer, initialState );

    const saveIdPokemon = (idPokemon) =>{
        dispatch({
            type:GET_IDPOKEMON,
            payload: idPokemon
        })
    };

    const deleteAbilities = ()=>{
        dispatch({
            type:DELETE_INFO_ABILITIES,
        })
    }

    const handleOpen = (b) => {
        dispatch({
            type:OPEN_MODAL,
        
        })
      }
    const handleClose = (b) => {
        dispatch({
            type:CLOSE_MODAL
            
        })
        deleteAbilities();
    }
   
    const saveInfoPokemon = (infoImage) =>{
        dispatch({
            type:GET_INFO,
            payload: infoImage
        })
    }

    const changeLng = (lng) =>{
        dispatch({
            type: CHANGE_LNG,
            payload: lng
        })
    }

    const saveAbilitys = (e) =>{
        e.abilities.forEach(async (y)=>{
            const ability = await axios.get(y.ability.url);
            ability.data.flavor_text_entries.forEach((b)=>{
                if(b.language.name ===`${state.lng}` && b.version_group.name === "x-y"){
                    dispatch({
                        type:GET_INFO_ABILITIES,
                        payload:{nombre:ability.data.name, descri: b.flavor_text}
                    })
                }
            })
        })
    }

    const saveDescription = async (e) =>{
        const {url} = e.species;
        const description = await axios.get(url);
        description.data.flavor_text_entries.forEach((e)=>{
            if(e.language.name ===`${state.lng}` && e.version.name === "x"){
                dispatch({
                    type:GET_INFO_DESCRIP,
                    payload: e.flavor_text
                })
            }
        })
    }
    const getInfoPokemon = async () => {
        if(!state.idPokemon) return;
        
        pokemons.forEach( async (e) => {
            if( e.id === state.idPokemon ){
                saveAbilitys(e);
                saveDescription(e)
                saveInfoPokemon(e)
            }
        });
    }

    useEffect( () => {
        getInfoPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.idPokemon]);

    
    return ( 
        <ModalContext.Provider
            value={{
                infoPokemon:state.infoPokemon,
                abilities:state.abilities,
                descrip:state.descrip,
                open:state.open,
                lng:state.lng,
                saveIdPokemon,
                changeLng,
                deleteAbilities,
                handleClose,
                handleOpen,
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalState;
