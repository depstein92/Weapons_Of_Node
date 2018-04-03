import React, { Component } from 'react';
import Header from './Header';
import SearchBar from '../containers/SearchBar';
import JSPlayGround from '../containers/JSPlayGround';
import LandingPage from './LandingPage';

import { HashRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/Search' component={SearchBar} />
        <Route path='/JSPlayGround' component={JSPlayGround} />
      </div>
      </HashRouter>
    );
  }
}

export default App;
