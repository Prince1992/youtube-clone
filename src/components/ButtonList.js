import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const list = [
    'All',
    'Gaming',
    'Song',
    'Live',
    'Cricket',
    'Sccoer',
    'News',
    'Football',
  ];
  return (
    <div className="flex">
      {list.map((text) => (
        <Button type={text} key={text} />
      ))}
    </div>
  );
};

export default ButtonList;
