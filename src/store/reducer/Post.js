import {ADD_POST, SET_IDLE_STATUS, SET_LOADING_STATUS } from '../actions/Post'


export const POST_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle',
}

const initialState = {
    list: [],
    requestStatus: POST_REQUEST_STATUS.IDLE
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IDLE_STATUS:
            return {
                ...state,
                status: POST_REQUEST_STATUS.IDLE
            }
            case SET_LOADING_STATUS:
                return {
                    ...state,
                    status: POST_REQUEST_STATUS.LOADING,
                }
            case ADD_POST: {
                    return {
                        ...state,
                        list: [
                    
                            ...action.payload.postList
                        ]
                    }
                }  
        default:
            return state
    }
}