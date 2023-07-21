import React from 'react';
import PersonCard from './Samplestate';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">People Information</h1>
      <PersonCard name="John Doe" age="30" occupation="Software Engineer" />
      <PersonCard name="Jane Smith" age="25" occupation="Data Scientist" />
      <PersonCard name="Michael Johnson" age="40" occupation="Teacher" />
    </div>
  );
};

export default App;
