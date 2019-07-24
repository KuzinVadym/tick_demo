import React, { useContext, useEffect } from 'react';
import Context from './context';
import './App.css';
import Cell from './components/Cell'

function App() {

  const appContextValue = useContext(Context);

  const {
    cells1, initCells1, tick1,
    cells2, initCells2, tick2
  } = appContextValue;

  useEffect(() => {
    initCells1();
    initCells2();
    var timerId = setInterval(function() {
      tick1();
      tick2();
    }, 1000);
  }, cells1.length);

  return (
    <div className="App">
      <div className="App-canvas">
        {cells1.map((row, rowIndex) => (
          <div key={'row_' + rowIndex} className="App-row">
            {row.map((cell, cellIndex) => (
                <Cell key={'cell_' + cellIndex} cell={cell}/>
            ))}
          </div>
        ))}
      </div>
      <div>
        {cells2.map((row, rowIndex) => (
            <div key={'row_' + rowIndex} className="App-row">
              {row.map((cell, cellIndex) => (
                  <Cell key={'cell_' + cellIndex} cell={cell}/>
              ))}
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
