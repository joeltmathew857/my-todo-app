import React from 'react';

// PersonCard component receives 'name', 'age', 'occupation', and 'avatar' as props
const PersonCard = ({ name, age, occupation, avatar }) => {
  return (
    <div className="bg-gradient-to-br from-pink-300 to-purple-500 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow transform hover:scale-105">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mx-auto mb-4 transition-transform transform hover:scale-110">
          <img className="w-full h-full object-cover" src={avatar} alt={name} />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-white">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h2>
        <p className="text-gray-200 mb-1">Age: {age}</p>
        <p className="text-gray-200">Occupation: {occupation}</p>
      </div>
      <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full focus:outline-none">
        Contact
      </button>
    </div>
  );
};

export default PersonCard;
