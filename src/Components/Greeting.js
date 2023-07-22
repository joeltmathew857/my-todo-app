// Greeting.js
import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      <h2>Welcome to My React App, {name}!</h2>
      <p>Thanks for visiting.</p>
    </div>
  );
};

export default Greeting;
