import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
}from './userActionTypes'

const InitialState = {
    loading: false,
    users:[],
    error:''
}

const userReducer = (state = InitialState, action) =>{
    switch(action.type){
       case FETCH_USERS_REQUEST: return {
           ...state,
           loading: true

       }
       case FETCH_USERS_SUCCESS: return {
           loading: false,
           users: action.payload,
           error:''

       }
       case FETCH_USERS_FAILURE: return {
           loading: false,
           users:[],
           error: action.payload
       }
       default: return state
    }
    
}

export default userReducer;