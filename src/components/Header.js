import React from 'react'
import './Header.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">

      <h1 className="header-title">Recipe App
      <FontAwesomeIcon icon={faBreadSlice} />
</h1>

      <div className="header-buttons">
      <a href="/">
        <button className="header-button">Home</button>
      </a>
      <a href="/search">
        <button className="header-button">Browse Recipes</button>
        </a>  
        <a href="/create">
        <button className="header-button">Create Recipe</button>
        </a>
        <a href="/profile">
        <button className="header-button">Profile</button>
        </a>
        <button className="header-button">Log Out</button>
      </div>
    </div>
  );
};


export default Header;
