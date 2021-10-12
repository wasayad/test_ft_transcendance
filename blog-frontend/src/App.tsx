import React, { Component } from 'react';
import './App.css';
import NavBar from "./component/NavBar_src/NavBar"
import History from './component/History_src/History'
import Stream from './component/Stream_src/Stream'
import Actuality from './component/Actuality_src/Actuality'
import FriendList from './component/FriendList_src/FriendList'
import Message from './component/Message_src/Message'



class HomePage extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <History />
        <Actuality />
        <FriendList />
        <Stream />
        <Message />
    </div>
    );
  }
}

export default HomePage;
