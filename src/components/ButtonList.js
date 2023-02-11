import React from 'react';
import Button from './Button';

const ButtonList = () => {
  //const list = [All, Gaming, Song, Live, Cricket, Sccoer, News, Football];
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Song" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Sccoer" />
      <Button name="News" />
      <Button name="Football" />
    </div>
  );
};

export default ButtonList;
