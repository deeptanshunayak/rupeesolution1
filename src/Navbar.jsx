import React, { useState, useEffect, useRef } from "react";
import web1 from "../src/images/Rupee solutions.svg";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { Element, Link, animateScroll as Scroll } from "react-scroll";
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
              <a href="#emi" ><span className='game-change'>EMI</span></a>
            </li>
            <li>
              <a href="#main"><span className='game-change'>Overview</span></a>
            </li>
            <li>
              <a href="#eligibility"><span className='game-change'>Eligibility</span></a>
            </li>
            <li>
              <a href="#features"><span className='game-change'>Features</span></a>
            </li>
            <li>
              <a href="#documents"><span className='game-change'>Documents</span></a>
            </li>
            <li>
              <a href="#ruloans"><span className='game-change'>Fees & Charges</span></a>
            </li>
            <li>
              <a href="#accorder"><span className='game-change'>FAQ's</span></a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        
      </nav>
    </>

  );
};

export default Navbar;