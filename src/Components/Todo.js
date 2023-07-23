import React, { useState } from 'react';

const TodoList = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);
  
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new item to the list
    setItems([...items, inputValue]);

    // Clear the input field
    setInputValue('');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new item"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </form>

      <ul className="list-disc mt-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
