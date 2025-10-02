import React from "react";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="homepage-hero">
        <h1 className="homepage-title">Welcome to BlogIt</h1>
        <p className="homepage-subtitle">
          BlogIt is a platform where writers and creators share their stories, tutorials, and experiences. Build your audience, connect with readers, and discover trending content in your favorite topics.
        </p>
        <button className="homepage-cta">Get Started</button>
      </div>
    </div>
  );
}

export default HomePage;
