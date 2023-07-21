import React from 'react';

// PersonCard component receives 'name' and 'age' as props
const PersonCard = ({ name, age }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
    </div>
  );
};

export default PersonCard;
