import React from "react";

import './BottomNavBar.css'

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
      <ul className="flex justify-around items-center">
        <li className="m-3 text-center">
          <a href="/" className="flex flex-col items-center">
            <img
              src="home.png"
              alt="Home"
              className="navBarIconSize mb-1"
            />
          </a>
        </li>
        <li className="m-3 text-center">
          <a href="/helperSearchPage" className="flex flex-col items-center">
            <img
              src="work.png"
              alt="Search"
              className="navBarIconSize mb-1"
            />
          </a>
        </li>
        <li className="m-3 text-center">
          <a href="/helperProfilePage" className="flex flex-col items-center">
            <img
              src="husky.png"
              alt="Profile"
              className="navBarIconSize mb-1"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
