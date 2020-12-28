/* eslint-disable import/no-anonymous-default-export */
import {
    GET_POKEMONS, MORE_POKEMONS, LESS_POKEMONS, CLEAR_POKEMONS
} from '../../types';

export default ( state, action ) =>{ 
    switch(action.type) {

        case GET_POKEMONS:
            return{
                ...state,
                pokemons:[...state.pokemons, action.payload]
            }
        
        case MORE_POKEMONS:
            return{
                ...state,
                pokemons:[],
                pokemonNumber:state.pokemonNumber + 5
             }

        case LESS_POKEMONS:
            return{
                ...state,
                pokemons:[],
                pokemonNumber:state.pokemonNumber - 5
            } 
        
        case CLEAR_POKEMONS:
            return{
                ...state,
                pokemons:[],
                pokemonNumber:0
            }  

    default:
    return state;
    }
 }