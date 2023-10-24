import React, { useState } from 'react';

function Categories({ categories, filterPlants }) {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const handleCategoryChange = (e) => {
      const category = e.target.value;
      setSelectedCategory(category);
      filterPlants(category);
    }
  
    return (
      <div>
        <label htmlFor="categorySelect"></label>
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Toutes les catégories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default Categories;