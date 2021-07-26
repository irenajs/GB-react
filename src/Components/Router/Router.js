import React from 'react'
 import { Switch, Route } from 'react-router'
 import Chat from '../ChatList/Chat'
 import Home from '../Home'
 import Chats from '../ChatList/Chats'


 export default function Router(props) {
    return (

        <Switch>
             <Route
                 path='/'
                 exact
                 render={() => (
                     <Home
                         chats={props.chats}
                         currentChat={props.currentChat}
                         onCurrentChatChange={props.onCurrentChatChange}/>
                 )}/>
             <Route
                 exact
                 path='/chats'
                 render={() => (
                     <Chats
                         chats={props.chats}
                         currentChat={props.currentChat}
                         onCurrentChatChange={props.onCurrentChatChange}
                         getIsChatExists={props.getIsChatExists}
                         onAddChat={props.onAddChat}
                         onRemoveChat={props.onRemoveChat}
                         />
                 )}
                 />

                <Route
                 path='/chats/:chatId'
                 render={() => {
                     return <Chat getIsChatExists={props.getIsChatExists} />
                 
                 }}
                 />

                 <Route path='/profile'>
                 <p>Profile page</p>
                 <div className='userPhoto'></div>
             </Route>
             <Route>
                 <p>404: not found</p>
             </Route>
         </Switch>
    )
}