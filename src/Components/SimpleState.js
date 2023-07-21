import React, { useState } from 'react';

const SimpleStateExample = () => {
  // Define a state variable and its setter function using useState
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to handle decrementing the count
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function to handle resetting the count to zero
  const resetCount = () => {
    setCount(0);
  };

  // Function to handle setting a custom starting value
  const handleSetStartingValue = () => {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
      setInputValue('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={decrementCount}>-</button>

          <h2 className="text-2xl font-bold">{count}</h2>
          <button className="px-4 py-2 bg-blue-500 text-white rounded ml-2" onClick={incrementCount}>+</button></div>

      <div className="flex items-center">

      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-500" placeholder="Set starting value" />

     <button className="px-4 py-2 bg-blue-500 text-white rounded-r ml-2" onClick={handleSetStartingValue}>Set</button>
      </div>
      <div className="mt-4">
      <button className="px-4 py-2 bg-red-500 text-white rounded mt-2" onClick={resetCount}>Reset</button>

      </div>
    </div>
  );
};

export default SimpleStateExample;
