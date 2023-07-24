import React, { useState } from 'react';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, inputValue]);
    setInputValue('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new item"
          className="border p-2 mr-2 flex-grow"
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
