import { useState } from "react";
import Card from "./Card";

const CARDS_RAW = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

// let cards = {};
// let cnt = 0;
// for (const card of CARDS_RAW) {
//   cards[cnt] = {
//     id: cnt,
//     img: card.img,
//     isFront: false,
//     isVanished: false,
//   }
// }

let CARDS = CARDS_RAW.map((card, index) => {
  return {
    id: index,
    img: card.img,
    isFront: false,
    isVanished: false,
    isClickable: true,
  };
});

const GameBoard = () => {
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

    if (flippedCards.length == 2) {
      disableClickOnCards();
      // if vanishable
      if (!vanishCardsIfPossible()) {
        // if not vanishable
        setTimeout(resetCards, 500);
      } else {
        resetCards();
      }
      setFlippedCards([]);
    }
  };

  return (
    <div id="game-board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          src={"/assets/" + card.img}
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
