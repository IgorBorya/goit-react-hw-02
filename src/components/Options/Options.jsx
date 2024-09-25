import React, { useState } from "react";

export const Options = () => {
  const [counter, setCounter] = useState(0);
  const handleGoodCounter = () => {
    setCounter(counter + 1);
  };
  const handleNeutralCounter = () => {
    setCounter(counter + 1);
  };

  const handleBadCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleGoodCounter}>Good</button>
      <button onClick={handleNeutralCounter}>Neutral</button>
      <button onClick={handleBadCounter}>Bad</button>
    </div>
  );
};
