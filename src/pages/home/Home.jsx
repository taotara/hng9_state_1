import React from 'react';
import slack from '../../img/Slack_icon.png';
import github from '../../img/Icon.svg'
import { ExternalLink } from 'react-external-link';
import './home.css';
import { Link } from "react-router-dom";
import taofeek from '../../img/taofeek.jpg'
import AvatarMobieWindow from '../../img/_Avatar share button.svg';
import AvatarLargeWindow from '../../img/_Avatar share button1.svg';

function Home() {
  return (
    <main className='homePage'>
        <header className='head'>
          <div className="avatar">
              
              <img src={AvatarMobieWindow} alt="My Avatar" className='hideWindow' /> <img src={AvatarLargeWindow} alt="My Avatar" className='hideMobile' />
          </div>
            <img src={taofeek} alt="Taofeek Aderoju" id='profile__img' />
            <p id='slack'>Slack handle: taotara</p>
            <h1 className='name'>@taotara</h1>
        </header>
        <div id='twitter' className='btn'>
          <ExternalLink href="https://twitter.com/taotara">
            <span>Twitter</span>
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
        <div className="btn" id="contact">
                <Link to="/contact">Contact</Link>
        </div>
        <div className="social">
          <img src={slack} alt="slack" height="24px" />
          <img src={github} alt="github" height="24px" />
        </div>
    </main>
  )
}

export default Home