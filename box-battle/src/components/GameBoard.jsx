import { useState } from 'react';

function GameBoard({ onPlayerSwitch, gameBoard }) {
  return (
    <ol id="game-board">
      {gameBoard.map((rowArr, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowArr.map((cellVal, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onPlayerSwitch(rowIndex, colIndex)}
                  disabled={cellVal !== null}
                >
                  {cellVal}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
