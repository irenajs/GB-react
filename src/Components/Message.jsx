import React from 'react'

function Message(props) {
    const { nick = '123id', render = () => {}  } = props
    return (
        <p id={nick}>
            {props.author}: {props.text}
            <br/>
            {render({ className: 'message__postscriptum' })}
        </p>
    )
}

export default Message;