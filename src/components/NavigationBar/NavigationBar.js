import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"

const NavigationBar = () => {
    return (
      <header className="NavigationBar">
        <nav>
          <ul>
            <Link to="/">Home</Link> |{" "} 
            <Link to="/profile">Profile</Link>
          </ul>
        </nav>
      </header>
    )
};

export default NavigationBar;