import React from 'react';
import './App.css';

import Players from './components/Players'
import DarkMode from './hooks/DarkMode'

function App() {
  return (
    <div className="App">
      <h1>Players in the 2019 Women's World Cup</h1>
      <Players/>
    </div>
  );
}

export default App;
