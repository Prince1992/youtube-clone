import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  useEffect(() => {
    console.log(searchQuery);
    const timer = setTimeout(() => getSearchQuery(), 500);
    // Make and API after every keystroke
    //But if the difference between 2 API calls is < 200 decline API calls

    // Clear timer
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchQuery = async () => {
    console.log('API Call-', searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestion(json[1]);
  };

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
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full p-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestion(true)}
            onBlur={(e) => setShowSuggestion(false)}
          />
          <button
            type="button"
            className="border border-gray-400 p-2 rounded-r-full bg-gray-200"
          >
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((suggestion) => (
                <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
