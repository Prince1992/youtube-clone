import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return pattern
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="p-5 w-48 shadow transition ease-in-out delay-150">
      <ul className="py-5">
        <li>Home -</li>
        <li>Shorts-</li>
        <li>Video-</li>
        <li>Live-</li>
      </ul>
      <h1 className="font-bold">Subscriptin</h1>
      <ul>
        <li>Music-</li>
        <li>Sports-</li>
        <li>Gaming-</li>
        <li>Movies-</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Test-</li>
        <li>Test-</li>
        <li>Test-</li>
        <li>Test-</li>
      </ul>
    </div>
  );
};

export default Sidebar;
