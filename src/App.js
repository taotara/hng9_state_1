import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Contact from './pages/contact/Contact';



class App extends Component {
  render() {
    
    return (
      <div className="container">

        
                <Router>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
        <Footer />
      </div>
    );
  }
}



export default App;
