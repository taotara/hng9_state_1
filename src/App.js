import React, { Component } from 'react';
import './App.css';
import taofeek from './img/taofeek.jpg'
import AvatarMobieWindow from './img/_Avatar share button.svg';
import AvatarLargeWindow from './img/_Avatar share button1.svg'
import I4G from './img/I4G.png';
import Zuri_logo from './img/Zuri_logo.png';
import slack from './img/Slack_icon.png';
import github from './img/Icon.svg'
import { ExternalLink } from 'react-external-link';
import useWindowSize from './hooks/useWindowSize';



class App extends Component {
  render() {

    const { width } = useWindowSize;

    return (
      <div className="container">
        <div className="avatar">
          
          {width > 375 ? <img src={AvatarMobieWindow} alt="My Avatar" /> : <img src={AvatarLargeWindow} alt="My Avatar" />  }
        </div>
        <img src={taofeek} alt="Taofeek Aderoju" id='profile__img' />
        <h1 className='name'>Taofeek Aderoju</h1>
        <div id='twitter' className='btn'>
          <ExternalLink href="https://twitter.com/taotara">
            <span>@taotara</span>
          </ExternalLink>
        </div>
        <div className='btn' id='btn__zuri'>
          <ExternalLink href="https://training.zuri.team/">
            <span>Zuri Team</span>
          </ExternalLink>
        </div>
        <div className='btn' id='books'>
          <ExternalLink href="https://books.zuri.team/">
            <span>Zuri Books</span>
          </ExternalLink>
        </div>
        <div className='btn' id='book__python'>
          <ExternalLink href="https://books.zuri.team/python-for-beginners?ref_id=taotara">
            <span>Python Books</span>
          </ExternalLink>
        </div>
        <div className='btn' id='pitch'>
          <ExternalLink href="https://background.zuri.team">
            <span>Background Check for Coders</span>
          </ExternalLink>
        </div>
        <div className='btn' id='book__design'>
          <ExternalLink href="https://books.zuri.team/design-rules">
            <span>Design Books</span>
          </ExternalLink>
        </div>
        <div className="social">
          <img src={slack} alt="slack" height="24px" />
          <img src={github} alt="github" height="24px" />
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
