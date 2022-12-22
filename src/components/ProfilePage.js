import React from 'react';
import RecipeCard from './RecipeCard'
import './ProfilePage.style.css';

function ProfilePage({profile })  {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={profile.profileImageUrl} alt="Profile Picture" />
        <h1>{profile.userName}</h1>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <h3>{profile.recipeCount}</h3>
          <p>Recipes</p>
        </div>
        <div className="stat">
          <h3>{profile.followersCount}</h3>
          <p>Followers</p>
        </div>
        <div className="stat">
          <h3>{profile.followingCount}</h3>
          <p>Following</p>
        </div>
      </div>
      <div className="profile-bio">
        <h2>About Me</h2>
        <p>{profile.bio}</p>
      </div>
      <div className="profile-recipes">
        <h2>My Recipes</h2>

      </div>
    </div>
  );
};

export default ProfilePage;
