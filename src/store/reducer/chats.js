import {ADD_CHAT, REMOVE_CHAT} from '../actions/chats'

const initialState = {
//chatList: [],

}


export const chatsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return{
                  ...state,
        
                // chatList: [
                //     ...state.chatList,
                //     {
                //       id: `id${state.chatList.length}`,
                //       name: action.name,
                      
                //     },
                //   ],
                  [action.payload.id]: action.payload,
            }
            case REMOVE_CHAT: {
                delete state[action.payload.chatId]
    
                return {
                     ...state,
                }
            }
            default:
                return state
    }
}