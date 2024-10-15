// components/CategorySelector.js
import { useEffect, useState } from 'react';
const CategorySelector = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    // Fetch categories (this can be from an API or static data)
    const fetchCategories = async () => {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  const handleCategoryClick = async (categoryId) => {
    const response = await fetch(`/api/scategory/${categoryId}`);
    const data = await response.json();
    setSubcategories(data);
  };
  return (
    <div>
      <h2>Categories</h2>
      <div>
        {categories.map(category => (
          <button key={category.id} onClick={() => handleCategoryClick(category.id, )}>
            {category.name}
          </button>
        ))}
      </div>
      <h3>Subcategories</h3>
      <ul>
        {subcategories.map(subcategory => (
          <li key={subcategory.id}>{subcategory.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default CategorySelector;