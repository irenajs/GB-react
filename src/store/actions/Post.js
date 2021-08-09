import {API_URL} from '../../Components/contacts/contacts'
import transport from '../../sevices/transport'

export const ADD_POST = 'POST::ADD_POST'
export const SET_ERROR_STATUS = 'POST::SET_ERROR_STATUS'
export const SET_LOADING_STATUS = 'POST:SET_LOADING_STATUS'
export const SET_IDLE_STATUS = 'POST::SET_IDLE_STATUS'

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })

export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })

export const setIdleStatus = () => ({ type: SET_IDLE_STATUS })


export const addPost = (postList) => {
    return {
        type: ADD_POST,
        payload: postList
    }
}


export const fetchPost = () => {
    return  async (dispatch, getState) => {
        dispatch(setLoadingStatus())

        fetch(API_URL)
            .then((response) => {
                if (!response.ok ||response.status !== 200) {
                    throw Error('Post not found')
                }

                return response.json()
            })
            .then((responseJson) => {
                dispatch(addPost(responseJson))
                dispatch(setIdleStatus())
            })
            .catch(error => {
                dispatch(setErrorStatus())
                console.error('error ', error)
            })
    }
}

export const fetchPostByAxios = () => {
    return async (dispatch, getState) => {
        dispatch(setLoadingStatus())

        try {
            const { data } = await transport.get(API_URL)

            dispatch(setIdleStatus())
            dispatch(addPost(data))
        } catch (error) {
            dispatch(setErrorStatus())
            
            console.error('error ', error)
        }

    }
}
