import React from 'react';
import './Packages.css';

const Package = ({ title, priceRange, description, includedItems, onGetQuote, imgSource }) => {
    return (
        <div className="package">
            <img src={imgSource} alt={title} />
            <div className="package-content">
                <h3>{title}</h3>
                <p className="price">{priceRange}</p>
                <p className="description">{description}</p>
                <h4>What's Included:</h4>
                <ul>
                    {includedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="package-footer">
                    <a className="button" onClick={onGetQuote}>
                        Get A Quote
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Package;