import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Where does the logo have to live in order to work with React?</p>
        <p>Earlier in the day, Rob was unable to access his images unless
           he put them in his public folder. However, in this default example,
           there is an svg in src that works just fine</p>
        <p>In this, the second branch, there is new stuff that is not in the
           master branch.</p>
        
      </div>
    );
  }
}

export default App;
