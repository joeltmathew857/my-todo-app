import React from "react";

const Square = ({value, onSquareClick }) => {
    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
        onClick={onSquareClick}     
           >
            {value}
        </button>
    );
};


