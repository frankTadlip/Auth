import React from "react";
import { Link } from "react-router";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/maps/beenhere';
import Account from 'material-ui/svg-icons/action/account-box';
import Home from 'material-ui/svg-icons/action/home';
import Message from 'material-ui/svg-icons/communication/message';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    title: {
        cursor: 'pointer', 
    },
}

const buttonStyle = {
    color: 'white'
  };

  const rightButtons = (
      <div>
          <IconButton tooltip="Home" iconStyle={{color: "white"}}>
              <Link to={"/home"} activeStyle={{ color: "red" }}><Home /> </Link></IconButton>
               <IconButton tooltip="Message">
              <Link to={"/home"} activeStyle={{ color: "red" }}><Message /> </Link></IconButton>
          <IconButton tooltip="Profile">
              <Link to={"/profile"} activeStyle={{ color: "red" }}><Account /> </Link></IconButton>
              
          <IconButton tooltip="Logout">
              <Link to={"/profile"} activeStyle={{ color: "red" }}><Account /> </Link></IconButton>
      </div>
  );

export const Header = (props) => {
    return (
        <AppBar
            title={<span style={styles.title}>Title</span>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={rightButtons}
            />

        // <nav>
        //     <ul>
        //         <li><Link to={"/home"} activeStyle={{color: "red"}}>Home </Link></li>
        //         <li><Link to={"/profile"} activeStyle={{color: "red"}}>Profile </Link></li>
        //     </ul>
        // </nav>
    );
}


      /* {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)} */