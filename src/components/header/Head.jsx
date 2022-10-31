import React from 'react';
import './head.css';
import taofeek from '../../img/taofeek.jpg'
import AvatarMobieWindow from '../../img/_Avatar share button.svg';
import AvatarLargeWindow from '../../img/_Avatar share button1.svg';

function Head() {

  return (
    <header className='head'>
      <div className="avatar">
          
          <img src={AvatarMobieWindow} alt="My Avatar" className='hideWindow' /> <img src={AvatarLargeWindow} alt="My Avatar" className='hideMobile' />
      </div>
        <img src={taofeek} alt="Taofeek Aderoju" id='profile__img' />
        <p className='slackHidden'>Slack handle: taotara</p>
        <h1 className='name'>Taofeek Aderoju</h1>
    </header>
  )
}

export default Head