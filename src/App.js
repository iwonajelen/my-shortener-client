import React from 'react';
import { Shortener } from './features/shortener/Shortener'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shortener />
      </header>
    </div>
  );
}

export default App;
