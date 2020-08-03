import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ProductConsumer } from '../Context/context';


export default class Service extends Component {
    render() {
      const { id,serviceTitle, serviceDescription, serviceImage } = this.props.service;
      return (
            <ProductConsumer>
            {(value) =>(
  
                <div className="service" >
                      <div className="serviceTitle">
                         <h2 >{serviceTitle}</h2>
                      </div>
                      
                      <Link to='/contact' className="btn-primary">
                              Hire Me
                      </Link>
                     
                    
                      <div className="serviceDescription">
                       <p>{serviceDescription}</p>
                      </div> 
                </div>
            )}
            </ProductConsumer>
      );
    }
  }