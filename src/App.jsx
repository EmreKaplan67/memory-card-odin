// src/App.jsx
import React from "react";
import Game from "./components/Game";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-t from-sky-500 to-indigo-500 flex justify-center items-start p-6">
      <Game />
    </div>
  );
}

export default App;
