import React, { useState } from 'react';
import './FrontPage.style.css';

function FrontPage() {

    const images = [
        '/FoodImages/Image1.jpg',
        '/FoodImages/Image2.jpg',
        '/FoodImages/Image3.jpg'
      ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = (direction) => {
      if (direction === 'prev') {
        setCurrentIndex((currentIndex + images.length - 1) % images.length);
      } else {
        setCurrentIndex((currentIndex + 1) % images.length);
      }
    };

    
    const ImageRecycler = () => {
      return (
        <div className="recyclerContainer">
            <button onClick={() => handleButtonClick('prev')}>Back</button>
            <a href="/recipe">
            <img src={images[currentIndex]} alt="An image" className="shadow"/>
            </a>
            <button onClick={() => handleButtonClick('next')}>Next</button>
        </div>
      );
    };

  return (
    <div>
        <div className="container">
      <h1>Welcome to Our Recipe Web App</h1>
      <p>Here you can find delicious recipes for every occasion and dietary preference.</p>
      <h2>Featured Recipes</h2>
      <ImageRecycler/>
      <div className="padding"></div>
      <ul>
        <li>
          <img src="/FoodImages/Image7.jpg" alt="Chocolate Cake" className="shadow"/>
          <h3>Chocolate Cake</h3>
          <p>A rich and indulgent chocolate cake that is sure to satisfy any sweet tooth.</p>
          <button>View Recipe</button>
        </li>
        <li>
          <img src="/FoodImages/Image6.jpg" alt="Vegan Stir Fry" className="shadow"/>
          <h3>Vegan Stir Fry</h3>
          <p>A healthy and flavorful stir fry packed with vegetables and plant-based protein.</p>
          <button>View Recipe</button>
        </li>
        <li>
          <img src="/FoodImages/Image8.jpg" alt="Grilled Cheese Sandwich" className="shadow"/>
          <h3>Grilled Cheese Sandwich</h3>
          <p>A classic grilled cheese sandwich with gooey melted cheese and crispy bread.</p>
          <button>View Recipe</button>
        </li>
      </ul>
      <h3>Browse our full collection of recipes by category:</h3>
      <ul>
        <li><a href="/breakfast">Breakfast</a></li>
        <li><a href="/lunch">Lunch</a></li>
        <li><a href="/dinner">Dinner</a></li>
        <li><a href="/desserts">Desserts</a></li>
        <li><a href="/vegan">Vegan</a></li>
        <li><a href="/gluten-free">Gluten-Free</a></li>
      </ul>
    </div>
    </div>

  );
}
export default FrontPage;
