import React, { Component } from 'react';
import Header from './Header';
import '../styles/App.css';
import SearchBar from '../containers/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;
