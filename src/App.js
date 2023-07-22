import React from 'react';
import TodoList from './Components/Greeting';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-800 w-full text-center">Todo List App</h1>
      <TodoList />
    </div>
  );
};

export default App;
