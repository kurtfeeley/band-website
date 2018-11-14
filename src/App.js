import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Listen from './components/Listen/Listen';

import './App.scss';

class App extends Component {
  render () {
    return (
      <Router>
        <>
          <Header/>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/music' exact component={Listen}/>
          <Footer/>
        </>
      </Router>
    );
  }
}

export default App;
