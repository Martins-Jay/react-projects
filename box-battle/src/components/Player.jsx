import { useState } from 'react';

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(() => !isEditing);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" placeholder='Enter name' required />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}

export default Player;
