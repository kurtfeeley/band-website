import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';

import './App.scss';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
