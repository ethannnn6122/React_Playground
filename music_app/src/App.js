import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer/SearchContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>NAVBAR</div>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
