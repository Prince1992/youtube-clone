import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1 justify-between">
        <img
          alt="text"
          onClick={() => toggleMenuHandler()}
          className="h-8  cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />

        <img
          alt="text"
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-12 px-10">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
        />
        <button
          type="button"
          className="border border-gray-400 p-2 rounded-r-full bg-gray-200"
        >
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          alt="text"
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
