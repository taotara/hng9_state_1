import React, { Component } from 'react';
import './App.css';
import taofeek from './img/taofeek.jpg'
import _AvatarShareButton from './img/_Avatar share button.svg';
import I4G from './img/I4G.png';
import Zuri_logo from './img/Zuri_logo.png';
import { ExternalLink } from 'react-external-link';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="avatar">
          <img src={_AvatarShareButton} alt="My Avatar" />
        </div>
        <img src={taofeek} alt="Taofeek Aderoju's picture" id='profile__img' />
        <h1 className='name'>Taofeek Aderoju</h1>
        <div id='twitter'>
          <ExternalLink href="https://twitter.com/taotara">
            <span>@taotara</span>
          </ExternalLink>
        </div>
        <div className='btn'>
          <ExternalLink href="https://zuri.team/">
            <span>Zuri Team</span>
          </ExternalLink>
        </div>
        <div className='btn'>
          <ExternalLink href="https://books.zuri.team/">
            <span>Zuri Books</span>
          </ExternalLink>
        </div>
        <div className='btn'>
          <ExternalLink href="https://books.zuri.team/">
            <span>Background Check for Coders</span>
          </ExternalLink>
        </div>
        <div className='btn'>
          <ExternalLink href="https://books.zuri.team/">
            <span>Design Books</span>
          </ExternalLink>
        </div>
        <footer>
          <img src={Zuri_logo} alt="Zuri Intership" width="138.77px" height="" />
          <p className='footer'>HNG Internship 9 Front Task</p>
          <img src={I4G} alt="I4G" width="99.1px" />
        </footer>
        
      </div>
    );
  }
}

export default App;
