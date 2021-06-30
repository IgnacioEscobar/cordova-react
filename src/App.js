import React from 'react';
import Text from './Text';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function BatteryStatus() {
  const [status, setStatus] = useState(null)
  useEffect(() => {
    window.addEventListener("batterystatus", onBatteryStatus, false);
    function onBatteryStatus(status) {
      setStatus(status)
    }
  }, [])

  return (
    status != null ? <span>Bateria {status.level}% / {status.isPlugged ? "Conectado": "No conectado"}</span> : <span>Battery not available</span>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Text/>
        <BatteryStatus/>
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
