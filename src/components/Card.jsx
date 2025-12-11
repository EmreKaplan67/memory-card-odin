// src/components/Card.jsx
import React from "react";

function Card({ id, image, title, onClick }) {

  return (
    <div
      className="cursor-pointer bg-white border-2 border-gray-200 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-200 ease-out hover:scale-105 w-56 h-80 flex flex-col"
      role="button"
      tabIndex={0}
      onClick={() => onClick(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(id);
        }
      }}
    >
      <div className="flex-1 overflow-hidden rounded-t-xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="text-center py-2 text-sm font-medium rounded-b-xl border-t-2 border-gray-200">{title}</div>
    </div>
  );
}

export default React.memo(Card);
