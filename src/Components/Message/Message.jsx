import React from 'react'
import PropTypes from 'prop-types'

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

Message.propTypes = {
    nick: PropTypes.string,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
Message.defaultProps = {}

export default Message;