const ScoreBoard = (props) => {
  return (
    <div id="score">
      <h2>Score</h2>
      <p>
        Pairs clicked: <span id="pairs-clicked">{props.pairsClicked}</span>
      </p>
      <p>
        Pairs guessed: <span id="pairs-guessed">{props.pairsGuessed}</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
