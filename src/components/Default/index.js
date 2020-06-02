import React, { Component } from 'react';
import './style.scss';
import Hero from "../Hero";


export default class Default extends Component {
  render() {
    return (
      <>
      <Hero hero="defaultHero"/>
      <div>
        <h1>page not found</h1>
      </div>
      </>
    )
  }
}
