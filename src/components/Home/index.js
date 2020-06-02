import React, { Component } from 'react';
import './style.scss';
import Blogs  from '../Blogs';
import Hero from "../Hero";
import Banner from '../Banner';
import {Link} from 'react-router-dom';



export default class Home extends Component {
  render() {
    return (
      <>
      <Hero>
        <Banner title="welcome to devmuangi" subtitle="Expect soft tutorials on general developer stuff">
          <Link to='/about' className="btn-primary">
            portfolio
          </Link>
        </Banner>
      </Hero>

      <div className="home">
        <Blogs />
      </div>
      </>
    )
  }
}
