import React from "react";


const Hero = () => {
  return (
    <section className="hero">
      {/* Feature Banner as a Large Button */}
      <div className="hero-feature-banner">
        <button className="feature-button">
          <span className="feature-badge">New feature</span>
          <span className="feature-text">Check out the team dashboard <span style={{ fontSize: '1rem' }}>&#8594;</span>
            {/* <img src="/images/arrow.png" alt="Arrow"/> */}
           </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-demo">
            {/* <FaPlay className="video-icon" /> */}
            <img
          src="/images/play.png"
          alt="play"
          className="play-image"
          
        />
            Demo
          </button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image-container">
        <img
          src="/images/hero-image.png"
          alt="Analytics Dashboard"
          className="hero-image"
        />
      </div>

      {/* Company Logos */}
      <div className="hero-logos">
        <p>Join 4,000+ companies already growing</p>
        <div className="logo-grid">
          <img src="/images/logo1.png" alt="Company 1" />
          <img src="/images/logo2.png" alt="Company 2" />
          <img src="/images/logo3.png" alt="Company 3" />
          <img src="/images/logo4.png" alt="Company 4" />
          <img src="/images/logo5.png" alt="Company 5" />
          <img src="/images/logo6.png" alt="Company 6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
