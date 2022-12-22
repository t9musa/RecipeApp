import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import FrontPage from './components/FrontPage';
import Footer from './components/Footer';
import Header from './components/Header';
import RecipePage from './components/RecipePage';
import ProfilePage from './components/ProfilePage';
import About from './components/About';
import RecipeBrowser from './components/RecipeBrowser';
import Recipes from './Recipes';
import CreateRecipePage from './components/CreateRecipePage';
import ProfileData from './ProfileData';


const App = () => {

  const recipe = {
    name: 'Chocolate Chip Cookies',
    image: '/FoodImages/Image4.jpg',
    description: 'Delicious chocolate chip cookies',
    ingredients: ['1 cup butter', '1 cup sugar', '1 cup brown sugar', '2 eggs', '1 tsp vanilla', '2 cups flour', '1 tsp baking soda', '1 tsp salt', '1 cup chocolate chips'],
    instructions: [
      'Preheat the oven to 350°F.',
      'Cream together the butter, sugar, and brown sugar until smooth.',
      'Beat in the eggs, one at a time, then stir in the vanilla.',
      'Combine the flour, baking soda, and salt; gradually add to the creamed mixture and mix well.',
      'Stir in the chocolate chips.',
      'Drop by rounded tablespoon onto ungreased baking sheets.',
      'Bake for 8-10 minutes, or until lightly golden.'
    ]
  };

  return (
    <div>
      <Header/>
      <div className="padding"></div>
    <Router>
    <Routes>
      <Route path="/" element={<FrontPage/>} />
      <Route path="/recipe" element={<RecipePage recipe={recipe}/>} />
      <Route path="/profile" element={<ProfilePage profile={ProfileData}/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/search" element={<RecipeBrowser recipes={Recipes}/>} />
      <Route path="/create" element={<CreateRecipePage/>} />
    </Routes>
  </Router>
  <Footer/>
  </div>
  );
}

export default App;