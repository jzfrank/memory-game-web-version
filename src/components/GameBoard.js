import { useState } from "react";
import Card from "./Card";
import { shuffle } from "../algorithms/shuffle";

import aquaman from "../assets/aquaman.jpg";
import batman from "../assets/batman.jpg";
import captainAmerica from "../assets/captain-america.jpg";
import fantasticFour from "../assets/fantastic-four.jpg";
import flash from "../assets/flash.jpg";
import greenArrow from "../assets/green-arrow.jpg";
import greenLantern from "../assets/green-lantern.jpg";
import ironman from "../assets/ironman.jpg";
import spiderman from "../assets/spiderman.jpg";
import superman from "../assets/superman.jpg";
import theAvengers from "../assets/the-avengers.jpg";
import thor from "../assets/thor.jpg";

const CARDS_RAW = [
  { name: "aquaman", img: "aquaman.jpg", src: aquaman },
  { name: "batman", img: "batman.jpg", src: batman },
  { name: "captain america", img: "captain-america.jpg", src: captainAmerica },
  { name: "fantastic four", img: "fantastic-four.jpg", src: fantasticFour },
  { name: "flash", img: "flash.jpg", src: flash },
  { name: "green arrow", img: "green-arrow.jpg", src: greenArrow },
  { name: "green lantern", img: "green-lantern.jpg", src: greenLantern },
  { name: "ironman", img: "ironman.jpg", src: ironman },
  { name: "spiderman", img: "spiderman.jpg", src: spiderman },
  { name: "superman", img: "superman.jpg", src: superman },
  { name: "the avengers", img: "the-avengers.jpg", src: theAvengers },
  { name: "thor", img: "thor.jpg", src: thor },

  { name: "aquaman", img: "aquaman.jpg", src: aquaman },
  { name: "batman", img: "batman.jpg", src: batman },
  { name: "captain america", img: "captain-america.jpg", src: captainAmerica },
  { name: "fantastic four", img: "fantastic-four.jpg", src: fantasticFour },
  { name: "flash", img: "flash.jpg", src: flash },
  { name: "green arrow", img: "green-arrow.jpg", src: greenArrow },
  { name: "green lantern", img: "green-lantern.jpg", src: greenLantern },
  { name: "ironman", img: "ironman.jpg", src: ironman },
  { name: "spiderman", img: "spiderman.jpg", src: spiderman },
  { name: "superman", img: "superman.jpg", src: superman },
  { name: "the avengers", img: "the-avengers.jpg", src: theAvengers },
  { name: "thor", img: "thor.jpg", src: thor },
];

const CARDS = shuffle(
  CARDS_RAW.map((card, index) => {
    return {
      id: index,
      img: card.img,
      src: card.src,
      isFront: false,
      isVanished: false,
      isClickable: true,
    };
  })
);

const GameBoard = (props) => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [cards, setCards] = useState(CARDS);

  const resetCards = () => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        return { ...card, isFront: false, isClickable: true };
      })
    );
  };

  const disableClickOnCards = () => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        return { ...card, isClickable: false };
      })
    );
  };

  const vanishCardsIfPossible = () => {
    const [card1, card2] = cards.filter((card) =>
      flippedCards.includes(card.id)
    );
    console.table(card1);
    console.table(card2);
    if (card1.img === card2.img) {
      setCards((prevCards) =>
        prevCards.map((card) => {
          if (flippedCards.includes(card.id)) {
            return {
              ...card,
              isVanished: true,
            };
          } else {
            return card;
          }
        })
      );
      return true;
    } else {
      return false;
    }
  };

  const flipCardHandler = (id) => {
    let newCards = cards.slice();
    console.log("id", id);
    const indexOfFlippedCard = newCards.findIndex((card) => card.id === id);
    newCards[indexOfFlippedCard].isFront = true;
    setCards(newCards);
    flippedCards.push(id);

    if (flippedCards.length === 2) {
      disableClickOnCards();
      if (!vanishCardsIfPossible()) {
        // if not vanishable
        setTimeout(resetCards, 500);
      } else {
        // if vanishable
        resetCards();
        props.incrementPairsGuessed();
      }
      setFlippedCards([]);
      props.incrementPairsClicked();
    }
  };

  return (
    <div id="game-board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          src={card.src}
          isFront={card.isFront}
          isVanished={card.isVanished}
          isClickable={card.isClickable}
          flipCardHandler={flipCardHandler}
        />
      ))}
    </div>
  );
};

export default GameBoard;
