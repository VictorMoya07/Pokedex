import React, { useReducer } from 'react';
import { GET_POKEMONS, MORE_POKEMONS, LESS_POKEMONS, CLEAR_POKEMONS } from '../../types';
import PokemonContext from './pokemonContext'
import PokemonReducer from './pokemonReducer'
import axios from 'axios';




const PokemonState = props => {

    const initialState = {
        pokemons:[],
        pokemonNumber:0
    }
   
    const [state, dispatch] = useReducer( PokemonReducer, initialState )
        
    const getPokemons = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=5&offset=${state.pokemonNumber}`;
        const result = await axios.get(url);
        const resultUrlData = await result.data.results.map( (resul) => resul.url );
        await resultUrlData.forEach(async (e)=>{
           const resultPokemon = await axios.get(e);
           dispatch({
            type:GET_POKEMONS,
            payload: resultPokemon.data
        })
        })
    }

    const morePokemons =  () => {
         dispatch({
            type:MORE_POKEMONS
        })
    }

    const lessPokemons =  () => {
        dispatch({
            type:LESS_POKEMONS
        })
    }

    const clearPokemons = () =>{
        dispatch({
            type:CLEAR_POKEMONS
        })
    }

    return ( 
        <PokemonContext.Provider
            value={{
                pokemons:state.pokemons,
                pokemonNumber:state.pokemonNumber,
                getPokemons, 
                morePokemons,
                lessPokemons,
                clearPokemons
            }}
        >
            {props.children}
        </PokemonContext.Provider>
     );
}
 
export default PokemonState;