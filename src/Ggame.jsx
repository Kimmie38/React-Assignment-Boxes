import React, { useState, useEffect } from "react";

const Ggame = () => {
  const [gridSize, setGridSize] = useState(window.innerWidth < 640 ? 6 : 12);
  const [targetBox, setTargetBox] = useState(Math.floor(Math.random() * gridSize));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setGridSize(window.innerWidth < 640 ? 6 : 12);
      restartGame();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, );

  const handleBoxClick = (index) => {
    if (index === targetBox) {
      setWinner(true);
      setGameOver(true);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setTargetBox(Math.floor(Math.random() * gridSize));
    setGameOver(false);
    setWinner(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-purple-500 to-blue-500 p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Ggame - Guess the Box</h1>
      {gameOver ? (
        winner ? (
          <h2 className="text-5xl font-bold text-green-600">You win, sucker!</h2>
        ) : (
          <h2 className="text-5xl font-bold text-red-600">You're a Loser!</h2>
        )
      ) : (
        <div
          className={`grid gap-4 p-4 bg-white rounded-lg shadow-lg ${gridSize === 6 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-3 sm:grid-cols-4"}`}
        >
          {Array.from({ length: gridSize }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleBoxClick(index)}
              className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 text-black font-bold rounded-lg flex items-center justify-center hover:bg-gray-400"
            >
              
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
