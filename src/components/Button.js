import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className="rounded p-2 m-2 bg-gray-300">{name}</button>
    </div>
  );
};

export default Button;
