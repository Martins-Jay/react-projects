import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onPlayerSwitch, turns }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleCellClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];

  //     updatedBoard[rowIndex][colIndex] = activePlayer;
  //     return updatedBoard;
  //   });

  //   onPlayerSwitch();
  // }

  let gameBoard = initialGameBoard; // copy

  if (turns.length > 0) {
    for (const turnObj of turns) {
      const { square, playerIdentity } = turnObj;
      const { row, col } = square;

      gameBoard[row][col] = playerIdentity;
    }
  }

  return (
    <ol id="game-board">
      {gameBoard.map((rowArr, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowArr.map((cellVal, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onPlayerSwitch(rowIndex, colIndex)}>
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
