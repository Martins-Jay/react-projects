function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turnObj) => (
        <li>
         Player {turnObj.playerIdentity} selected{' '}
          {`row ${turnObj.square.row}, column ${turnObj.square.col}`}
        </li>
      ))}
    </ol>
  );
}

export default Log;
