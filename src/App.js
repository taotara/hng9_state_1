import React, { Component } from 'react';
import './App.css';
import taofeek from './img/taofeek.jpg'

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={taofeek} alt="Taofeek Aderoju's picture" className='image' />
        <h1 className='name'>Taofeek Aderoju</h1>
        <p id='twitter' className='btn'>Twitter Link</p>
        <p id='twitter' className='btn'>Twitter Link</p>
        <p id='twitter' className='btn'>Twitter Link</p>
        <p id='twitter' className='btn'>Twitter Link</p>
      
      </div>
    );
  }
}

export default App;
