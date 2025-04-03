import React from "react";

const SortOptions = ({ sortOrder, onSortChange }) => {
  return (
    <select className="form-select w-25" value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
      <option value="asc">⬆️ Price: Low to High</option>
      <option value="desc">⬇️ Price: High to Low</option>
    </select>
  );
};

export default SortOptions;
