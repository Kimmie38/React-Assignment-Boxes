import React, { useState } from "react";

const GRID_SIZE = 12;

const Ggame = () => {
  const [targetBox, setTargetBox] = useState(Math.floor(Math.random() * GRID_SIZE));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  const handleBoxClick = (index) => {
    if (index === targetBox) {
      setWinner(true);
      setGameOver(true);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setTargetBox(Math.floor(Math.random() * GRID_SIZE));
    setGameOver(false);
    setWinner(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Ggame - Guess the Box</h1>
      {gameOver ? (
        winner ? (
          <h2 className="text-5xl font-bold text-green-600">You win, sucker!</h2>
        ) : (
          <h2 className="text-5xl font-bold text-red-600">You're a Loser!</h2>
        )
      ) : (
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
      )}
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
