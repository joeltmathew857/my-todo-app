import React, { useState } from 'react';

const SimpleStateExample = () => {
  // Define a state variable and its setter function using useState
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to handle decrementing the count
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Simple Counter</h1>
      <div className="flex items-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={decrementCount}
        >
          -
        </button>
        <h2 className="text-2xl font-bold">{count}</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SimpleStateExample;
