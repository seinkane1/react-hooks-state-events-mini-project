import React from 'react';
import CategoryFilter from "../components/CategoryFilter";
import App from "../components/App";
import { CATEGORIES } from "../data";


function CategoryFilter({ categories, selectedCategory, onCategoryFilterChange }) {
  return (
    <div>
      <h2>Filter by Category:</h2>
      {categories.map(category => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onCategoryFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
