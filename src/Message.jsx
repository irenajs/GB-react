import React from 'react'



function Message(props) {
    
    return (
        <p className= 'text'>
            {props.author}: {props.text}
        </p>
    )
}

export default Message;