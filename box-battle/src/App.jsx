import Player from './components/Player.jsx'

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player name='Player1' symbol='X' />

        <Player name='Player2' symbol='0' />
      </ol>
    </div>
  );
}

export default App;
