import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import "./TopNavBar.css"

const TopNavbar = () => {

  const [selectedOption, setSelectedOption] = useState("Asker");

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };


  return (
    <div className="topNarBarMargins flex justify-between items-center">
      {/* Left Side - Text with Dropdown */}
      <div className="flex items-center">
        <span className="text-5xl font-bold mr-4">TaskDawg</span>
        
        <select
          value={selectedOption}
          onChange={handleSelect}
          className="text-white bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-2"
        >
          <option value="Asker">Asker</option>
          <option value="Helper">Helper</option>
        </select>
      </div>

      {/* Right Side - Button with Image and Circular Border */}
      <div className="flex items-center">
        <button className="border-2 border-black">
          <img
            src="profile_icon.png"
            alt="Profile"
            className=""
          />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;