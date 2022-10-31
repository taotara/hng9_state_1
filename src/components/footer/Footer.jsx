import React from 'react';
import I4G from '../../img/I4G.png';
import Zuri_logo from '../../img/Zuri_logo.png';
import './footer.css';

function Footer() {
  return (
    <footer>
        <img src={Zuri_logo} alt="Zuri Intership" width="138.77px" height="" />
        <p className='footer'>HNG Internship 9 Front Task</p>
        <img src={I4G} alt="I4G" width="99.1px" />
    </footer>
  )
}

export default Footer