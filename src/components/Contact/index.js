import React from 'react';
import Hero from "../Hero";
import Banner from '../Banner';
import {Link} from 'react-router-dom';
import "./style.scss";

export default function Contact ({name, title}) {

    return (
      <>
        <Hero>
        <Banner title="Contact Me" subtitle="I am Looking foward to working with you">
          <Link to='/about' className="btn-primary">
            portfolio
          </Link>
        </Banner>
      </Hero>
      <div>
          <h1>Hello from Contact</h1>
      </div>
      </>
    )
}
