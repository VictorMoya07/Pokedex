import React, { useReducer, useContext } from 'react';
import { LOGIN_SUCESS, GET_USER, LOGOUT } from '../../types';
import LoginMasterContext from './loginMasterContext';
import PokemonState from '../pokemonList/pokemonContext';
import LoginMasterReducer from './loginMasterReducer';



const LoginMasterState = props =>{

    const pokemonContext = useContext(PokemonState);
    const {clearPokemons} = pokemonContext;
    
    const initialState = {
        login:null,
        userLogin:null,
        logOut:null,
    }

    const [ state, dispatch ] = useReducer(LoginMasterReducer, initialState);


    const logInFn = (data) =>{
        const { userId } = data;
            dispatch({
                type:LOGIN_SUCESS,
                payload: userId
            })
    }

    const getUserLog = () =>{
        dispatch({
            type:GET_USER
        })
    }
    
    const setLogOut = () =>{
        dispatch({
            type:LOGOUT
        })
        clearPokemons()
    }
    

    return(
        <LoginMasterContext.Provider
            value = {{
                login:state.login,
                userLogin: state.userLogin,
                logOut:state.logOut,
                logInFn,
                getUserLog,
                setLogOut,
            }}
         >{props.children}

        </LoginMasterContext.Provider>
    )

}

export default LoginMasterState;