/* eslint-disable import/no-anonymous-default-export */
import {
    GET_INFO, GET_IDPOKEMON, GET_INFO_ABILITIES, DELETE_INFO_ABILITIES, GET_INFO_DESCRIP, OPEN_MODAL,CLOSE_MODAL,CHANGE_LNG
} from '../../types';

export default ( state, action ) =>{ 
    switch(action.type) {

        case GET_IDPOKEMON:
            return{
                ...state,
                idPokemon:action.payload
            }

        case GET_INFO:
            return{
                ...state,
                infoPokemon:action.payload
                    
                
            }
            
        case GET_INFO_ABILITIES:
             return{
                ...state,
                abilities: [...state.abilities, action.payload]
            }

        case DELETE_INFO_ABILITIES:
            return{
                ...state,
                abilities: []
            }

        case GET_INFO_DESCRIP:
                return{
                ...state,
                descrip:action.payload
        }
        case OPEN_MODAL:
            return{
                ...state,
                open:true
        }
        case CLOSE_MODAL:
            return{
                ...state,
                open:false
        }
        case CHANGE_LNG:
            return{
                ...state,
                lng:action.payload
        }

    default:
    return state;
    }
 }