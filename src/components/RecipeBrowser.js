import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./RecipeBrowser.style.css";

const RecipeSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
 // const [recipes, setRecipes] = useState([]);

 /*
  useEffect(() => {
    const fetchRecipes = async () => {
      const result = await axios.get(`/api/recipes?q=${searchTerm}`);
      setRecipes(result.data);
    };
    fetchRecipes();
  }, [searchTerm]);
*/
  const { recipes } = props;

  return (
    <div className="recipe-search-page">

      <h1 className="recipe-search-title">Search Recipes</h1>
      <form className="recipe-search-form">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="recipe-search-input"
        />
        <button type="submit" className="recipe-search-button">
          Search
        </button>
      </form>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <a href={`/recipes/${recipe.id}`} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-card-image" />
            <h2 className="recipe-card-title">{recipe.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
