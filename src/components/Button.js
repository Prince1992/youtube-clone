import React from 'react';

const Button = ({ type }) => {
  return (
    <div>
      <button className="rounded p-2 m-2 bg-gray-300">{type}</button>
    </div>
  );
};

export default Button;
