import { combineReducers, createStore } from 'redux'
import { messagesReducer } from './reducer/messages'
import { chatsReducer } from './reducer/chats'
import profileReducer from './reducer/profile'


export const rootReducer = combineReducers ({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer
})


export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

 