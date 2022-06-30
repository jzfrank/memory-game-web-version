import { Fragment, useState } from "react";

import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";

const MainWindow = () => {
  const [pairsClicked, setPairsClicked] = useState(0);
  const [pairsGuessed, setPairsGuessed] = useState(0);

  const title = <h1>Superhero Memory Game</h1>;
  return (
    <Fragment>
      {title}
      <ScoreBoard pairsClicked={pairsClicked} pairsGuessed={pairsGuessed} />
      <GameBoard
        incrementPairsClicked={() => setPairsClicked((prev) => prev + 1)}
        incrementPairsGuessed={() => setPairsGuessed((prev) => prev + 1)}
      />
    </Fragment>
  );
};

export default MainWindow;
