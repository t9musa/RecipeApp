import React from 'react'
import './RecipePage.style.css';

function RecipePage({ recipe }) {
    return (
        <div>
        <h1 className="heading">{recipe.name}</h1>
      <div className="container">
        <div className="mediumContainer">
            <div className="container">
            <img src={recipe.image} alt={recipe.name} />
            
            </div>
            <div className="descContainer">
            <p>Description:</p>
            <p>{recipe.description}</p>
            </div>
            <ul>
            <h2>Ingredients:</h2>
            {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
            ))}
            </ul>
        </div>
        <h2>Instructions:</h2>
        <ol>
          {recipe.instructions.map(instruction => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      </div>
      </div>
    );
  }
  
  export default RecipePage;