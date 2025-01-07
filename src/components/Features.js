import React from "react";
//import "./Features.css"; // Import the CSS file

const Features = () => {
  return (
    <section className="features-section">
      <h3 className="features-title">Features</h3>
      <h2 className="features-subtitle">
        Analytics that feels like it’s from the future
      </h2>
      <p className="features-description">
        Powerful, self-serve product and growth analytics to help you convert, engage,
        and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="features-grid">
        <div className="feature-item">
          <img src="/images/dummy-icon1.png" alt="icon" className="feature-icon" />
          <h3 className="feature-heading">Share team inboxes</h3>
          <p className="feature-text">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>
        <div className="feature-item">
          <img src="/images/dummy-icon2.png" alt="icon" className="feature-icon" />
          <h3 className="feature-heading">Deliver instant answers</h3>
          <p className="feature-text">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
        </div>
        <div className="feature-item">
          <img src="/images/dummy-icon3.png" alt="icon" className="feature-icon" />
          <h3 className="feature-heading">Manage your team with reports</h3>
          <p className="feature-text">
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.
          </p>
        </div>
        <div className="feature-item">
          <img src="/images/dummy-icon4.png" alt="icon" className="feature-icon" />
          <h3 className="feature-heading">Connect with customers</h3>
          <p className="feature-text">
            Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
          </p>
        </div>
        <div className="feature-item">
          <img src="/images/dummy-icon5.png" alt="icon" className="feature-icon" />
          <h3 className="feature-heading">Connect the tools you already use</h3>
          <p className="feature-text">
            Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
          </p>
        </div>
        <div className="feature-item">
          <img src="/images/dummy-icon6.png" alt="icon" className="feature-icon" />
          <h3 className="feature-heading">Our people make the difference</h3>
          <p className="feature-text">
            We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
          </p>
        </div>
      </div>
      <hr className="features-divider" />
      <div className="features-testimonial">
        <img src="/images/company-logo.png" alt="company logo" className="company-logo" />
        <p className="testimonial-text">
          We’ve been using Untitled to kickstart every new project and can’t imagine working without it.
        </p>
        <div className="testimonial-profile">
          <img src="/images/dummy-profile.png" alt="profile" className="profile-image" />
          
        </div><div>
            <p className="profile-name">Candice Wu</p>
            <p className="profile-role">Product Manager, Sisyphus</p>
          </div>
      </div>
    </section>
  );
};

export default Features;
