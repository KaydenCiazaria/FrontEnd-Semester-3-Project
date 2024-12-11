import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Where?");

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleItemClick = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className="search-bar">
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedCity}
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"].map(
              (city, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleItemClick(city)}
                >
                  {city}
                </div>
              )
            )}
          </div>
        )}
      </div>
      <input type="text" placeholder="Date" />
      <input type="text" placeholder="People" />
    </div>
  );
};

export default SearchBar;
