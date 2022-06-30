const ScoreBoard = () => {
  return (
    <div id="score">
      <h2>Score</h2>
      <p>
        Pairs clicked: <span id="pairs-clicked">0</span>
      </p>
      <p>
        Pairs guessed: <span id="pairs-guessed">0</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
