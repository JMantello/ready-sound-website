import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/icons/logo-black.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='max-width'>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Website Logo" />
                    </Link>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Questions</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;