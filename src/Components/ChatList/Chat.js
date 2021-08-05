import React from 'react'
import { Redirect, useParams } from 'react-router'
import Message from '../Message/Message'
import Input from '../Input/Input'
import { AUTHORS } from '../contacts/contacts'
import { sendMessageToBot } from '../../store/actions/messages'
import {  useDispatch, useSelector } from 'react-redux'
import { useIsChatExists } from '../../Hooks/isChatExists'
import '../App/App.css'
//import { getMessages } from '../../selectors/messages'
//import { getMessages } from '../../selectors/messages'


const Chat = (props) => {
    const { chatId } = useParams()

    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()

    const handleMessageSubmit = (newMessageText) => {
        dispatch(
            sendMessageToBot(chatId, {
                id: `message${Date.now()}`,
                author: AUTHORS.User,
                text: newMessageText,
            })
        )
    }

    const isChatExists = useIsChatExists({ chatId })

    if (!isChatExists) {
        return <Redirect to="/chats/:chatId" />
    }

    return (
        <div className="chat">
            {messageList.length ? (
                <div className="bordered">
                    {messageList.map((message) => (
                        <Message
                            key={message.id}
                            text={message.text}
                            author={message.author}
                        />
                    ))}
                </div>
            ) : null}

            <Input onSubmit={()=>handleMessageSubmit} />
        </div>
    )
}


export default Chat
 