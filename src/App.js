import React from 'react';
import Board from './board/Board'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p className="header">Snake Game!</p>
      </div>
      <div className="App-body">
        <Board className="board"></Board>
      </div>
    </div>
  );
}

export default App;
