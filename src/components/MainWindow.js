import { Fragment, useState } from "react";

import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";

const totalPairs = 12;

const MainWindow = () => {
  const [pairsClicked, setPairsClicked] = useState(0);
  const [pairsGuessed, setPairsGuessed] = useState(0);

  const title = <h1>Superhero Memory Game</h1>;
  return (
    <Fragment>
      <div className="row container">
        <div className="col s10">{title}</div>
        <div className="col s2">
          <ScoreBoard pairsClicked={pairsClicked} pairsGuessed={pairsGuessed} />
        </div>
      </div>
      {pairsGuessed !== totalPairs && (
        <GameBoard
          incrementPairsClicked={() => setPairsClicked((prev) => prev + 1)}
          incrementPairsGuessed={() => setPairsGuessed((prev) => prev + 1)}
        />
      )}
      {pairsGuessed === totalPairs && (
        <>
          <h1>Mission Accomplished!</h1>
          <h1>You used {pairsClicked} trials to make all cards vanish.</h1>
          <h1>Great job!</h1>
          <h2>Refresh to restart</h2>
        </>
      )}
    </Fragment>
  );
};

export default MainWindow;
