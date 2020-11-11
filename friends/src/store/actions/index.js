import axios from 'axios';
import {axiosWithAuth} from '../../utilities/axiosWithAuth';

//action types
export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';


export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START';
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS';
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE';

export const POST_FRIEND_START = 'POST_FRIEND_START';
export const POST_FRIEND_SUCCESS = 'POST_FRIEND_SUCCESS';
export const POST_FRIEND_FAILURE = 'POST_FRIEND_FAILURE';

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

//action creators (async)

export const fetchFriends = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_FRIENDS_START });
        
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err.data})
            })
    
    }
}

export const updateFriend = () => {
    return (dispatch) => {
        dispatch({ type: UPDATE_FRIEND_START });

        // axiosWithAuth()
        //     .get('/friends')
        //     .then((res) => {
        //         dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data })
        //     })
        //     .catch((err) => {
        //         dispatch({ type: UDPATE_FRIEND_FAILURE, payload: err.data })
        //     })

    }
}

export const postFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({ type: POST_FRIEND_START });

        axiosWithAuth()
            .post('/friends', newFriend)
            .then((res) => {
                console.log(newFriend)
                dispatch({ type: POST_FRIEND_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: POST_FRIEND_FAILURE, payload: err.message})
            })
    }
}

export const deleteFriend = (id) => {
    return (dispatch) => {
        dispatch({ type: DELETE_FRIEND_START });
        
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then((res) => {
                dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: DELETE_FRIEND_FAILURE, payload: err.message})
            })
    }
}