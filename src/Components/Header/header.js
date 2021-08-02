import React from "react";
import {Link} from "react-router-dom";
import '../App/App.css'

const Header = () => {
    return <div className="header">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats</Link>
        <Link to="/profile">Profile</Link>
    </div>
}

export default Header