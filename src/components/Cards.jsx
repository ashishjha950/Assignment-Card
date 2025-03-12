import React from 'react';

const Cards = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-green-100 p-6 m-4">
      <h1 className="text-xl font-bold mb-2 text-blue-900">{props.name}</h1>
      <p className="text-gray-700 text-base mb-2">Email: {props.email}</p>
      <p className="text-gray-700 text-base">Age: {props.age}</p>        
    </div>
  );
}

export default Cards;
