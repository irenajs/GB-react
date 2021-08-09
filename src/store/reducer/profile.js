import { CHANGE_NAME, CHANGE_IS_ONLINE } from '../actions/actions'


const initialState = {
    name: 'Nina',
    age: '20',
    isOnline: true,
}

export default function profileReducer(state = initialState, action){
    switch (action.type) {
        case CHANGE_NAME: {
        return {
            ...state, 
             name: action.payload.newName,
           
            }
        }
        case CHANGE_IS_ONLINE: {
            return {
                ...state,
                isOnline: action.payload.isOnline,
            }
        }
        
        default:
            return state
    }
}


  

