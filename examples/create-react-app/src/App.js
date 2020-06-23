import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dummy } from './Dummy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dummy val={'1. HMR Working '}></Dummy>
        {Dummy( { val:'2. HMR Not Working ' } )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
