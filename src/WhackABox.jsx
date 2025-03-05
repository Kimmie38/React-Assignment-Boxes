import React, { useState, useEffect } from "react";

const WhackABox = () => {
  const [targetIndex, setTargetIndex] = useState(Math.floor(Math.random() * 12));
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(5);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
      setMessage("Time's up! You lost!");
    }
  }, [timeLeft]);

  const handleBoxClick = (index) => {
    if (gameOver) return;

    if (index === targetIndex) {
      setMessage("You found the hidden dot! 🎉");
      setGameOver(true);
    } else {
      setMessage("Wrong box! Watch closely...");
      setTimeout(() => {
        setTargetIndex(Math.floor(Math.random() * 12));
        setMessage("");
        setTimeLeft(5); // Reset timer
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Whack-a-Box Game</h1>
      <p className="mb-2">Time Left: {timeLeft}s</p>
      <p className="mb-4">{message}</p>
      <div className="grid grid-cols-4 gap-4">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className="w-20 h-20 flex items-center justify-center border border-white cursor-pointer"
            style={{ backgroundColor: index === targetIndex ? "red" : "gray" }}
          >
            {index === targetIndex && "🎯"}
          </div>
        ))}
      </div>
      {gameOver && (
        <button
          onClick={() => {
            setGameOver(false);
            setTargetIndex(Math.floor(Math.random() * 12));
            setTimeLeft(5);
            setMessage("");
          }}
          className="mt-4 bg-blue-500 px-4 py-2 rounded"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default WhackABox;
