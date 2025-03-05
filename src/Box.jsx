import React, { useState } from "react";

export default function ColorBoxes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null),);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 min-h-screen w-screen h-screen bg-gray-100">
      {Array.from({ length: 12 }, (_, index) => (
        <div
          key={index}
          className={`h-full flex items-center justify-center text-white text-2xl font-bold transition-colors duration-300 ${
            activeIndex === null
              ? "bg-orange-500"
              : activeIndex === index
              ? "bg-green-500"
              : "bg-red-500"
          }`}
          onClick={() => handleClick(index)}
        >
        </div>
      ))}
    </div>
  );
}
