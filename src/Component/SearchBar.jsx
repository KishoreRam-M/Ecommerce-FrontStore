import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      className="form-control w-25"
      placeholder="🔎 Search products..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
