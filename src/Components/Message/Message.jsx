import React from 'react'
import PropTypes from 'prop-types'

function Message(props) {
    const { nick = 'John', render = () => {} } = props

    return (
        <p id={nick}>
            {props.author}: {props.text}
            <br />
            {render()}
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