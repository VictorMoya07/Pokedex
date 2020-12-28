import {
    LOGIN_SUCESS, LOGOUT, GET_USER, 
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state, action ) =>{ 
    switch(action.type) {

        case LOGIN_SUCESS:
            localStorage.setItem("UserId", action.payload);
            return{
                ...state,
                login:true,
                logOut:false,
            }

        case GET_USER:
            const user = localStorage.getItem("UserId");
            return { 
                ...state,
                userLogin:user
            }
        
        case LOGOUT:
            localStorage.removeItem("UserId");
            return { 
                 ...state,
                 logOut:true,
                 login:false,
            }
        default:
            return state;
    }
    
 }