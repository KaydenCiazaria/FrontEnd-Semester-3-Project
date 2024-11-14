// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Where?" />
      <input type="text" placeholder="Date" />
      <input type="text" placeholder="People" />
    </div>
  );
};

export default SearchBar;
