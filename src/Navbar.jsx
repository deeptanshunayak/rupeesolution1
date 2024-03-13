import React, { useState, useEffect } from "react";
import web1 from "../src/images/Rupee solutions.svg";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link, animateScroll as Scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [oldSticky,newSticky]=useState("main-nav1");
  window.onscroll=()=>{
    let temp;
    let top = window.scrollY;
    if(top>800){
      temp="main-nav1 fixed-top"
    }
    else{
      temp="main-nav1"
    }
    return newSticky(temp);
  }
  return (
    <>
      <nav className={oldSticky}>
        {/* 1st logo part  */}
        <div className="logo">

        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link1 mobile-menu-link1" : "menu-link1"
          }>
          <ul>
            <li>
              <Link activeClass='active' smooth spy to="emi"><span className='game-change'>EMI</span></Link>
            </li>
            <li>
              <Link smooth spy to="main"><span className='game-change'>Overview</span></Link>
            </li>
            <li>
              <Link smooth spy to="eligibility"><span className='game-change'>Eligibility</span></Link>
            </li>
            <li>
              <Link smooth spy to="features"><span className='game-change'>Features</span></Link>
            </li>
            <li>
              <Link smooth spy to="documents"><span className='game-change'>Documents</span></Link>
            </li>
            <li>
              <Link smooth spy to="ruloans"><span className='game-change'>Fees & Charges</span></Link>
            </li>
            <li>
              <Link smooth spy to="accorder"><span className='game-change'>FAQ's</span></Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">

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

export default Navbar;