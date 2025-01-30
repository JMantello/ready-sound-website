import React from 'react';
import './RequestAQuote.css';

const RequestAQuote = () => {
  return (
    <div className="request-a-quote">
      <div className="raq-image">
        <div className="raq-overlay">
          <div className="raq-text">
            <h1>Request A Quote Today</h1>
            <p>Get a fast, easy, and personalized quote tailored to your needs.</p>
            <a className="button">Get A Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAQuote;