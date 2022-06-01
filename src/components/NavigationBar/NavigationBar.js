import React from 'react';
import { Link, Routes } from 'react-router-dom';
import "./NavigationBar.css"
import * as CONST_ROUTES from '../../routing_constants/routes'
const NavigationBar = () => {
    return (
      <header className="NavigationBar">
        <nav>
          <ul>
            <Link to={CONST_ROUTES.HOME}>Home</Link> |{" "} 
            <Link to={CONST_ROUTES.SIGN_UP}>Sign Up</Link>
          </ul>
        </nav>
      </header>
    )
};

export default NavigationBar;