import React from 'react';
import './App.css';

import Players from './components/Players'
import DarkModeButton from './components/DarkModeButton'

function App() {
  return (
    <div className="App">
      <h1>Players in the 2019 Women's World Cup</h1>
      <DarkModeButton/>
      <Players/>
    </div>
  );
}

export default App;
