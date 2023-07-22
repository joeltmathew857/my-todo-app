// src/App.js
import React, { useState } from 'react';
import Greeting from './Components/Greeting';

const App = () => {
  const [userName, setUserName] = useState('John');
  const [showGreeting, setShowGreeting] = useState(true);

  const handleButtonClick = () => {
    setShowGreeting(!showGreeting);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is my first React application.</p>
      {showGreeting && <Greeting name={userName} />}
      <button onClick={handleButtonClick}>
        {showGreeting ? 'Hide Greeting' : 'Show Greeting'}
      </button>
    </div>
  );
};

export default App;
