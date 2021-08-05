import React from "react";
import '../App/App.css'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import ChatIcon from '@material-ui/icons/Chat';


const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));
  
     const Header = () => {
    const classes = useStyles();
  
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/"  className={classes.link}>
          <HomeIcon className={classes.icon} />
          Home
        </Link>
        <Link
          color="inherit"
          href="/chats"
          
          className={classes.link}
          to='/chats'
        >
          <ChatIcon className={classes.icon} />
          Chats
        </Link>
        <Link
          color="inherit"
          href="/profile"
          className={classes.link}
          to="/profile"
        >
          <FaceIcon className={classes.icon} />
          Profile
        </Link>
      </Breadcrumbs>
    );
  }

export default Header