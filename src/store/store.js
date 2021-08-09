import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { messagesReducer } from './reducer/messages'
import { chatsReducer } from './reducer/chats'
import profileReducer from './reducer/profile'
import { postReducer } from './reducer/Post'


const persistConfig = {
    key: 'root',
    storage,
}

export const rootReducer = combineReducers ({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    post: postReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)



export const persistor = persistStore(store)
 