import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <select className="form-select w-25" value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="All">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
