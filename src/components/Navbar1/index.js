import React from 'react';
import {Link} from 'react-router-dom';
import "./style.scss";
import logo from "../images/devmuangilogo1.png";
import Search from '../Search';


export default function Navbar (props) {

    return (
      <nav className="navbar">
        <ul className="navbar-nav"> 
        <Link to="/"> 
          <img src={logo} alt="devmuangi" className="logo"/> 
        </Link>
        <div>
          <Search />
          {/* <h1>search component</h1> */}
        </div> 
        { props.children}
         </ul>
      </nav>
    );
}
 