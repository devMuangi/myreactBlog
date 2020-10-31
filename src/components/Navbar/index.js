import React, { useState } from 'react';
import { Component } from "react";
import { Link } from 'react-router-dom';
import './style.scss';
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/devmuangilogo1.png";

export default class Navbar extends Component {
  state = {
        isOpen: false
       };
  handleToggle = () => {
        this.setState({ isOpen:!this.state.isOpen });
      };
  render(){
  return(
    <nav className="navbar">
      <div className="nav-center">
       <div className="nav-header">
        <Link to="/"> 
          <img src={logo} alt="devmuangi" className="logo"/> 
        </Link> 
        <button 
        type="button"
        className="nav-btn"
        onClick={this.handleToggle}
        >
        <FaAlignRight className="nav-icon" /> 
        </button> 
       </div> 
        <ul className={this.state.isOpen ? "menu-navbar show-nav" : "menu-navbar"}>
            <li className="menu-navbar__link"><Link to="/">Home</Link></li>
            <li className="menu-navbar__link"><Link to="/Services">Services</Link></li>
            <li className="menu-navbar__link"><Link to="/About">About</Link></li>
            <li className="menu-navbar__link"><Link to="/Work">Work</Link></li>
            <li className="menu-navbar__link"><Link to="/Contact">Hire Me</Link></li>
        </ul>
      </div>
    </nav>
   );
  }
 }



