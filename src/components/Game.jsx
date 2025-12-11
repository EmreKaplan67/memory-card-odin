// src/components/Game.jsx
import { useState } from "react";
import { cards as initialCards } from "../data/cards";
import { shuffle } from "../utils/shuffle";
import Board from "./Board";

function Game() {
  const [cards, setCards] = useState(initialCards);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function handleCardClick(id) {
    // If already clicked then reset
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
      setCards(shuffle(initialCards)); // restart with fresh shuffle
      return; // IMPORTANT!
    }

    // Otherwise update score
    const newScore = score + 1;
    setScore(newScore);
    setClickedCards([...clickedCards, id]);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    // Shuffle current cards
    setCards(shuffle(cards));
  }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex justify-between items-center w-full mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold">Memory Game</h2>
          <h3 className="text-lg">
            Get points by clicking on an image but don't click on any more than once!
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold">Score: {score}</p>
          <p className="text-lg font-bold">Best Score: {bestScore}</p>
        </div>
      </div>

      <Board cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default Game;
