import React from 'react';
import './style.scss';

export default function Banner({children,title,subtitle,image}) {
  return (
    <div className="banner">
     <h1>{title}</h1>
     {/* <div>{image}</div> */}
     <div>{image}</div>
     <p>{subtitle}</p>
     {children}
    </div>
  );
}
