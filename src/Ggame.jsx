import React, { useState, useEffect } from "react";

const GRID_SIZE = 12;
const TIMER_DURATION = 10; // seconds

const Ggame = () => {
  const [targetBox, setTargetBox] = useState(Math.floor(Math.random() * GRID_SIZE));
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("Find the hidden dot!");

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setMessage("Time's up! You lost!");
    }
  }, [timeLeft, gameOver]);

  const handleBoxClick = (index) => {
    if (gameOver) return;

    if (index === targetBox) {
      setGameOver(true);
      setMessage("🎉 You found the hidden dot! You win!");
    } else {
      setMessage("Wrong box! The dot moved!");
      setTimeout(() => {
        setTargetBox(Math.floor(Math.random() * GRID_SIZE));
        setMessage("Find the hidden dot!");
      }, 800);
    }
  };

  const restartGame = () => {
    setTargetBox(Math.floor(Math.random() * GRID_SIZE));
    setTimeLeft(TIMER_DURATION);
    setGameOver(false);
    setMessage("Find the hidden dot!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Ggame</h1>
      <p className="mb-2 text-lg">{message}</p>
      <p className="mb-4 text-red-500">Time Left: {timeLeft}s</p>
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: GRID_SIZE }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleBoxClick(index)}
            className="w-20 h-20 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
          >
            {gameOver && index === targetBox ? "🎯" : ""}
          </button>
        ))}
      </div>
      {gameOver && (
        <button
          onClick={restartGame}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default Ggame;
