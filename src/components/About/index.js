import React, { Component } from 'react';
import './style.scss';
import Hero from "../Hero";
import Banner from '../Banner';
import {Link} from 'react-router-dom';


export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <Hero>
        <Banner title="What's this all about?" subtitle="emoji ">
        </Banner>
      </Hero>

      <div className="about-me-main">
         <img src="img/dave.jpg" className="myRoundImage" alt="aboutMe??"></img>
         <div className="description">
            <p>
              Hi I'm David and welcome to devWORLD.I publish articles every week to help you out with all the tech knowledge you need.
              My passion is to work with businesses and individuals who want a share of the online market place by making their ideas come to life. 
              My go to technologies are REACT | REACT NATIVE | NODE JS.These are not the only technologies I'm farmiliar with ,we can always come to an agreement depending on the needs of my client.
            </p>       
         </div>
            <div className="btn-group">
               <Link to='/about' className="btn-primary">
                Lincenses & Certifications
                </Link>
                <Link to='/about' className="btn-primary">
                  download resume
                 </Link>
                {/* <Link to='/about' className="btn-primary">
                 github icon
                 </Link>
                 <Link to='/about' className="btn-primary">
                 codepen icon
                 </Link>
                 <Link to='/about' className="btn-primary">
                   Freecodecamp icon
                 </Link> */}
                 
              </div>
      </div>
      </React.Fragment>
    )
  }
}
