import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
}from './userActionTypes'

import axios from 'axios';
/// action creators

const fetchUserRequests = () =>{
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () =>{
    return (dispatch)=>{
        console.log('dispatching request')
        dispatch(fetchUserRequests())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            const users = response.data
            console.log('dispatching fetched users success')
            dispatch(fetchUserSuccess(users))
        })
        .catch((error)=> {
            
            dispatch(fetchUserFailure(error.message))
        })
    }

}