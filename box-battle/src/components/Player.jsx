import { useState } from 'react';

function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState('');

  function handleEditClick() {
    setIsEditing(() => !isEditing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        ) : (
          <span className="player-name">
            {playerName ? playerName : initialName}
          </span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
