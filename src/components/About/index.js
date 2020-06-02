import React, { Component } from 'react';
import './style.css';
import Hero from "../Hero";


export default class About extends Component {
  render() {
    return (
      <>
      <Hero hero="aboutHero" />
      <div>
        <h1>hello from about me</h1>
      </div>
      </>
    )
  }
}
