import React from 'react';
import PersonCard from './Samplestate';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-800 w-full text-center">People Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        <PersonCard
          name="John Doe"
          age="30"
          occupation="Software Engineer"
          avatar="https://i.imgur.com/1a0i54u.jpg"
        />
        <PersonCard
          name="Jane Smith"
          age="25"
          occupation="Data Scientist"
          avatar="https://i.imgur.com/w6CxjMV.jpg"
        />
        <PersonCard
          name="Michael Johnson"
          age="40"
          occupation="Teacher"
          avatar="https://i.imgur.com/i6Rf8sO.jpg"
        />
        <PersonCard
          name="Emily Brown"
          age="28"
          occupation="Designer"
          avatar="https://i.imgur.com/EXSSPSw.jpg"
        />
        <PersonCard
          name="Alex Williams"
          age="35"
          occupation="Doctor"
          avatar="https://i.imgur.com/4A3uvh7.jpg"
        />
        <PersonCard
          name="Olivia Davis"
          age="22"
          occupation="Student"
          avatar="https://i.imgur.com/7wHZ2yk.jpg"
        />
      </div>
    </div>
  );
};

export default App;