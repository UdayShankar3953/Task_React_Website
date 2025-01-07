import React from "react";


const FAQ = () => {
  return (
    <section className="faq-section">
      <h4 className="faq-title">Frequently asked questions</h4>
      <p className="faq-subtitle">
        Everything you need to know about the product and billing.
      </p>
      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-question">
            <h3>Is there a free trial available?</h3>
            <span className="faq-icon">−</span>
          </div>
          <p className="faq-answer">
            Yes, you can try us for free for 30 days. If you want, we'll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </p>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>Can I change my plan later?</h3>
            <span className="faq-icon">+</span>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>What is your cancellation policy?</h3>
            <span className="faq-icon">+</span>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>Can other info be added to an invoice?</h3>
            <span className="faq-icon">+</span>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>How does billing work?</h3>
            <span className="faq-icon">+</span>
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            <h3>How do I change my account email?</h3>
            <span className="faq-icon">+</span>
          </div>
        </div>
      </div>
      <div className="faq-footer">
  <div className="faq-footer-content">
    <img
      src="\images\dummy-3-profiles.png"
      alt="3 team members"
      className="faq-footer-img"
    />
    <h3>Still have questions?</h3>
    <p className="faq-footer-text">
      Can’t find the answer you’re looking for? Please chat with our friendly team.
    </p>
  </div>
  <button className="faq-footer-button">Get in touch</button>
</div>

    </section>
  );
};

export default FAQ;
