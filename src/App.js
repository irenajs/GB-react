import React from 'react'
import './App.css'
import Router from './Components/Router/Router'
import { Link } from 'react-router-dom'

function App() {
    const [chats, setChats] = React.useState([
        { id: 'chat1', name: 'Room 1' },
        { id: 'chat2', name: 'Room 2' },
        { id: 'chat3', name: 'Room 3' },
    ])
    const [currentChat, setCurrentChat] = React.useState(chats[0])

    const handleChangeChat = (chat) => setCurrentChat(chat)

    const handleAddChat = (chatName) => {
        setChats((currentChats) => [
            ...currentChats,
            { name: chatName, id: `chat${Date.now()}` },
        ])
    }

    const handleRemoveChat = (chatId) => {
        setChats((currentChats) =>
            currentChats.filter((chat) => chat.id !== chatId)
        )
    }

    const handleIsChatExists = React.useCallback(
        (chatId) => {
            return Boolean(chats.find((chat) => chat.id === chatId))
        },
        [chats]
    )

    return (
        <div className='container' >
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div className="App">
            <Router
                chats={chats}
                currentChat={currentChat}
                onCurrentChatChange={handleChangeChat}
                getIsChatExists={handleIsChatExists}
                onAddChat={handleAddChat}
                onRemoveChat={handleRemoveChat}
            />
            </div>
        </div>
    )
}

export default App;