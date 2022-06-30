import { Fragment } from "react";

import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";

const MainWindow = () => {
  const title = <h1>Superhero Memory Game</h1>;
  return (
    <Fragment>
      {title}
      <ScoreBoard />
      <GameBoard />
    </Fragment>
  );
};

export default MainWindow;
