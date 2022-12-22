import React from 'react';
import './About.style.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Recipe App</h1>
      <p className="about-description">
        Recipe App is a platform for home cooks to share their favorite recipes with the world. Our goal is to inspire creativity in the kitchen and bring people together through the joy of cooking.
      </p>
      <h2 className="about-subtitle">Meet the Team</h2>
      <div className="about-team">
        <div className="about-team-member">
          <img src="/Icons/Profile-icon.jpg" alt="Team Member 1" className="about-team-member-photo" />
          <h3 className="about-team-member-name">Jane Smith</h3>
          <p className="about-team-member-bio">
            Jane is the founder of Recipe App. She has a passion for cooking and loves to experiment with new ingredients and flavors.
          </p>
        </div>
        <div className="about-team-member">
          <img src="/Icons/Profile-icon.jpg" alt="Team Member 2" className="about-team-member-photo" />
          <h3 className="about-team-member-name">John Doe</h3>
          <p className="about-team-member-bio">
            John is the lead developer of Recipe App. He enjoys using technology to solve problems and make people's lives easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
