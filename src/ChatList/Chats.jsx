import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

function Chats() {
    const [chats] = React.useState ([
        { id: 'chat1', name: 'Room 1'},
        { id: 'chat2', name: 'Room 2'},
        { id: 'chat3', name: 'Room 3'},
    ])
   

    return (
        <div className='Chats_bar'>
            <List subheader="Chat rooms">
                {chats.map((chat) => (
                    <ListItem
                        button
                        key={chat.id}>
                        {chat.name}
                    </ListItem>
                ))}
            </List>

     
        </div>
    )
}


 export default Chats;