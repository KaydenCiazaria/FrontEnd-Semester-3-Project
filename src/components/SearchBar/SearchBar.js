import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Where?");
  const [selectedPeople, setSelectedPeople] = useState("People");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDropdown = (dropdown) => {
    // If the selected dropdown is already open, close it
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      // Close other dropdowns and open the new one
      setOpenDropdown(dropdown);
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setOpenDropdown(null); // Close all dropdowns after selecting a city
  };

  const handlePeopleSelect = (people) => {
    setSelectedPeople(people);
    setOpenDropdown(null); // Close all dropdowns after selecting people
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const searchParams = {
        city: selectedCity !== "Where?" ? selectedCity : null,
        people: selectedPeople !== "People" ? selectedPeople : null,
        startDate: startDate ? startDate.toISOString() : null,
        endDate: endDate ? endDate.toISOString() : null,
      };
      onSearch(searchParams); // Pass parameters to the parent or backend
    }
  };

  return (
    <div className="search-bar" onKeyDown={handleKeyDown} tabIndex="0">
      {/* City Dropdown */}
      <div className="dropdown-box">
        <div
          className="dropdown-header"
          onClick={() => toggleDropdown("city")}
        >
          {selectedCity}
        </div>
        {openDropdown === "city" && (
          <div className="dropdown-menu">
            {["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"].map(
              (city, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Date Range Picker */}
      <div className="dropdown-box">
        <div
          className="dropdown-header"
          onClick={() => toggleDropdown("date")}
        >
          {startDate ? `${startDate.toLocaleDateString()} - ${endDate ? endDate.toLocaleDateString() : ""}` : "Select dates"}
        </div>
        {openDropdown === "date" && (
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            className="date-picker-input"
          />
        )}
      </div>

      {/* People Dropdown */}
      <div className="dropdown-box">
        <div
          className="dropdown-header"
          onClick={() => toggleDropdown("people")}
        >
          {selectedPeople}
        </div>
        {openDropdown === "people" && (
          <div className="dropdown-menu">
            {[
              "1-5 People",
              "6-10 People",
              "11-15 People",
              "16+ People",
            ].map((group, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handlePeopleSelect(group)}
              >
                {group}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
