import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { useHistory } from 'react-router'
import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, removeChat } from '../../store/actions/chats'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/icons/Delete'

export default function Chats() {
   
    const history = useHistory()

    const chats = useSelector((state) => state.chats)
    const dispatch = useDispatch()

    const handleChatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const handleAddChat = (name) => {
        dispatch(addChat(`chat${Date.now()}`, name))

    }

    const handleRemoveChat = (chatId) => {
        dispatch(removeChat(chatId))
    }

    return (
        <div className='chats'>
            <div className='Chats_bar'>
                <List  subheader={<p>Chat rooms</p>}>
                        {Object.values(chats).map((chat) => (
                        <div style={{ display: 'flex' }} key={chat.id}>
                            <ListItem
                                button
                                component='a'
                                key={chat.id}
                                onClick={() => handleChatLinkClick(chat)}
                            >
                                {chat.name}
                            </ListItem>
                            <IconButton className='remove_btn' onClick={() => handleRemoveChat(chat.id)}>
                            <DeleteIcon />
                            </IconButton>
                            
                        </div>
                    ))}
                </List>
            </div>
            <div className='message_input'>
            
            <Input 
            label='Room'
            placeholder='Room name'
            onSubmit={handleAddChat} 
        
        />
        
            </div>
        </div>
    )
}

