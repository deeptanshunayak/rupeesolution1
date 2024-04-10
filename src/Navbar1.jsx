import React, { useState } from "react";
import web1 from "../src/images/Rupee solutions.svg";
import "./Navbar1.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <img src={web1} className="img-fluid animated"  alt="home img"></img>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
           
            <li>
              <NavLink to="/">
              <NavDropdown title="Loans" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"> <NavLink to="/loan">Personal Loan</NavLink></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"> <NavLink to="/loan1">Education Loan</NavLink></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"> <NavLink to="/loan4">Loan Against Property</NavLink></NavDropdown.Item>
        
        
        <NavDropdown.Item eventKey="4.4"> <NavLink to="/loan2">Car Loan</NavLink></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5"> <NavLink to="/loan5">Gold Loan</NavLink></NavDropdown.Item>
        
        <NavDropdown.Item eventKey="4.6"><NavLink to="/Business">Business Loan</NavLink></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.7"><NavLink to="/loan3">Home Loan</NavLink></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.8"><NavLink to="Creditcard">credit Card</NavLink></NavDropdown.Item>

      </NavDropdown>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          <NavLink to="/contactus" className="btn-get-started1">Get Started</NavLink>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar1;