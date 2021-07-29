import { CHANGE_NAME } from '../actions'


const initialState = {
    name: '',
    age: '',
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case CHANGE_NAME: {
        return {
            ...state, 
            name: action.payload.name,
            // age: action.payload.age,
            
            }
        }
        
        default:
            return state
    }
}


  

