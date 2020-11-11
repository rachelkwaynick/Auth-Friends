import { 
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE, 
    UPDATE_FRIEND_START, 
    UPDATE_FRIEND_SUCCESS, 
    UPDATE_FRIEND_FAILURE, 
    POST_FRIEND_START, 
    POST_FRIEND_SUCCESS, 
    POST_FRIEND_FAILURE,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE,
} from '../actions'

const initialState = {
    isLoading: false,
    friendsData: [],
    error: '',
    activeFriend: {},
    newFriend: false
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START: 
            return {
                ...state, 
                isLoading: true, 
                error: ''
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false, 
                friendsData: action.payload
            }
        case FETCH_FRIENDS_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case UPDATE_FRIEND_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case UPDATE_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ///insert more info
            }
        case UPDATE_FRIEND_FAILURE:
            return {
                ...state,
                isLoading: false,
                //insert more info
            }
        case POST_FRIEND_START: 
            return {
                ...state,
                isLoading: true,
                newFriend: true,
            }
        case POST_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                newFriend: false,
            }
        case POST_FRIEND_FAILURE:
            return {
                ...state,
                isLoading: false,
                newFriend: false,
                error: action.payload
            }
        case DELETE_FRIEND_START: 
            return {
                ...state,
                isLoading: true,
                ///insert more info
            }
        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friendsData: action.payload
            }
        case DELETE_FRIEND_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;

    }
}