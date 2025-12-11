// src/components/Board.jsx
import React from "react";
import Card from "./Card";

function Board({ cards, onCardClick }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default Board;
