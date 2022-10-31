import React, { Component } from 'react';
import './App.css';
import slack from './img/Slack_icon.png';
import github from './img/Icon.svg'
import { ExternalLink } from 'react-external-link';
import Head from './components/header/Head.jsx';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    
    return (
      <div className="container">
        <Head />
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
        <div className="social">
          <img src={slack} alt="slack" height="24px" />
          <img src={github} alt="github" height="24px" />
        </div>
        <Footer />
        
      </div>
    );
  }
}

export default App;
