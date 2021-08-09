import React from 'react'
import PropTypes from 'prop-types'

function UserInfo({ name, age }) {
    return (
        <React.Fragment>
            <p>
                <b>Name: </b>
                {name}
            </p>
            <p>
                <b>Age: </b>
                {age}
            </p>
        </React.Fragment>
    )
}

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

export default UserInfo;