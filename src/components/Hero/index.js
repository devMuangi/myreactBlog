// import React, { Component } from 'react'
// import './style.scss';

// export default class Hero extends Component {
//   render() {
    
//     return (
//       <div className="hero">
//         <div className="hero__background-image">
//         <div className="hero__background-text">
//         <p>intro</p>
//         <h2>introheader</h2>
//         </div>
//         </div>
//       </div>
//     )
//   }
// }
import React from 'react';
import './style.scss';


export default function Hero({ children, hero}) {
  return (
    <header className={hero}>
    {children}
    </header>
  );
}

Hero.defaultProps = {
  hero: "homeHero"
}

