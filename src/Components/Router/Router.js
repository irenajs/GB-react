 import React from 'react'
 import { Switch, Route } from 'react-router'
 import Chat from '../ChatList/Chat'
 //import Home from '../Home/Home'
 import Chats from '../ChatList/Chats'
 import Profile from '../Profile/Profile'
import HomeIndex from '../Home/HomeIndex'
import '../App/App.css'
import Post from '../Post/Post'
 
 export default function Router() {
    return (
        <Switch>
            <Route
                 path='/'
                 exact
                 render={() => (
                    <React.Fragment>
                        <HomeIndex />
                             {/* <hr/>  */}
                        {/* <Home
                        age={25}
                        name={'Glen'}
                        onChangeProfileName={(name) => console.log(name)}/>             */}
                    </React.Fragment>
                 )}
            />
            
            <Route exact path='/chats' component={Chats}/>

                <Route path='/chats/:chatId' component={Chat} />


                    <Route path='/profile'>
                    <Profile />   
                    </Route>
                    <Route path="/post" component={Post} />
            <Route>
                 <p>404: not found</p>
            </Route>
        
        </Switch>
    )
}

