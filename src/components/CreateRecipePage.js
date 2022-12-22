import React from 'react';
import './CreateRecipePage.style.css';

const CreateRecipePage = () => {

  return (
    <form className="recipe-form">
       <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" />

      <label htmlFor="ingredients">Ingredients:</label>
      <textarea id="ingredients" name="ingredients" />

      <label htmlFor="instructions">Preparation Instructions:</label>
      <textarea id="instructions" name="instructions" />

      <label htmlFor="servingSize">Serving Size:</label>
      <input type="number" id="servingSize" name="servingSize" />

      <label htmlFor="prepTime">Estimated Prep Time:</label>
      <input type="number" id="prepTime" name="prepTime" />

      <label htmlFor="cookTime">Estimated Cook Time:</label>
      <input type="number" id="cookTime" name="cookTime" />

      <label htmlFor="photos">Photos:</label>
      <input type="file" id="photos" name="photos" multiple />

      <label htmlFor="tags">Tags:</label>
      <select id="tags" name="tags" multiple></select>
      <button type="submit" className="btn btn-primary">Save Recipe</button>
    </form>
  );
};

export default CreateRecipePage;






