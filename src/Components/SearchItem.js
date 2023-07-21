import React from 'react';
import PersonCard from './Samplestate';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">People Information</h1>
      <PersonCard name="John Doe" age="30" />
      <PersonCard name="Jane Smith" age="25" />
      <PersonCard name="Michael Johnson" age="40" />
    </div>
  );
};

export default App;
