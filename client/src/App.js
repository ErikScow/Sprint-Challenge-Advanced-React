import React from 'react';
import logo from './logo.svg';
import './App.css';

import Players from './components/Players'
import DarkMode from './hooks/DarkMode'

function App() {
  return (
    <div className="App">
      <Players/>
    </div>
  );
}

export default App;
