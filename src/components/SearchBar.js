
import React from 'react';
import '../App.css';
function SearchBar({ searchQuery, setSearchQuery, clearSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={clearSearch} className="clear">
        Clear
      </button>
    </div>
  );
}

export default SearchBar;
