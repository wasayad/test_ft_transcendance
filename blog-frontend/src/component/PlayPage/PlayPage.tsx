import { Component } from 'react';
import NavBar from "../NavBar_src/NavBar"
import Message from '../Message_src/Message'
import GameMod from './GameMod'


class HomePage extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <GameMod />
          <Message />
    </div>
    );
  }
}

export default HomePage;
