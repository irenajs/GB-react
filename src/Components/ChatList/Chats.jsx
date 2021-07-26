import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import { useHistory } from 'react-router'
import Input from '../Input'
import { Button } from '@material-ui/core'

export default function Chats(props) {
    const {
        chats = [],
        currentChat,
        onCurrentChatChange,
        onAddChat,
        onRemoveChat,
    } = props
    const history = useHistory()

    const handleChatLinkClick = (chat) => {
        onCurrentChatChange(chat)
        history.push(`/chats/${chat.id}`)
    }

    return (
        <div className='chats'>
            <div className='Chats_bar'>
                <List  subheader={<p>Chat rooms</p>}>
                    {chats.map((chat) => (
                        <div style={{ display: 'flex' }}>
                            <ListItem
                                button
                                component='a'
                                key={chat.id}
                                selected={chat.id === currentChat.id}
                                onClick={() => handleChatLinkClick(chat)}
                            >
                                {chat.name}
                            </ListItem>
                            <Button className='remove_btn' onClick={() => onRemoveChat(chat.id)}>
                                Remove
                            </Button>
                        </div>
                    ))}
                </List>
            </div>
            <div className='message_input'>
            <Input onSubmit={onAddChat} />
            </div>
        </div>
    )
}