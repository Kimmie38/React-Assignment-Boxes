import React, { useState } from "react";

const GRID_SIZE = 12;

const Ggame = () => {
  const [targetBox, setTargetBox] = useState(Math.floor(Math.random() * GRID_SIZE));
  const [message, setMessage] = useState("Guess the correct box!");
  const [attempts, setAttempts] = useState(0);

  const handleBoxClick = (index) => {
    setAttempts(attempts + 1);
    if (index === targetBox) {
      setMessage(`🎉 Correct! You found it in ${attempts + 1} tries!`);
    } else {
      const difference = Math.abs(index - targetBox);
      if (difference <= 2) {
        setMessage("🔥 Very close! Try again!");
      } else if (difference <= 4) {
        setMessage("🌟 Close! Keep guessing!");
      } else {
        setMessage("❄️ Far away! Try a different box!");
      }
    }
  };

  const restartGame = () => {
    setTargetBox(Math.floor(Math.random() * GRID_SIZE));
    setMessage("Guess the correct box!");
    setAttempts(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Ggame - Guess the Box</h1>
      <p className="mb-2 text-lg text-white">{message}</p>
      <div className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-lg">
        {Array.from({ length: GRID_SIZE }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleBoxClick(index)}
            className="w-24 h-24 bg-gray-300 text-black font-bold rounded-lg flex items-center justify-center hover:bg-gray-400"
          >
            ?
          </button>
        ))}
      </div>
      <button
        onClick={restartGame}
        className="mt-6 px-6 py-2 bg-white text-purple-600 font-bold rounded-lg shadow-md hover:bg-gray-200"
      >
        Restart Game
      </button>
    </div>
  );
};

export default Ggame;
