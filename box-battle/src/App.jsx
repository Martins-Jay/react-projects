import { useState } from 'react';
import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';
import Log from './components/Log.jsx';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].playerIdentity === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  function handlePlayerSwitch(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerIdentity: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />

          <Player
            initialName="Player2"
            symbol="0"
            isActive={activePlayer === 'O'}
          />
        </ol>

        <GameBoard onPlayerSwitch={handlePlayerSwitch} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
