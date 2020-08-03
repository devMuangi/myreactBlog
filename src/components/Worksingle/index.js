import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ProductConsumer } from '../Context/context';


export default class Worksingle extends Component {
    render() {
      const { id, projectCategory, projectTitle, projectDescription, projectImage } = this.props.project;
      return (
            <ProductConsumer>
            {(value) =>(
  
            <div className="project" >
                  <div className="projectTitle">
                    <h2>{projectTitle}</h2>
                  </div>
                <div className="img-container-inner">
                  <img src={projectImage} alt="project" className="img-container-inner"/>
                </div>
                <div className="projectDescription">
                  <p>{projectDescription}</p>
                </div>
                {/* button goes here */}
                <div className="btn-group-work">
                <Link to='/about' className="btn-primary">
                live
                 </Link>
                 <Link to='/about' className="btn-primary">
                code
                 </Link>
                 <Link to='/about' className="btn-primary">
                read more
                 </Link>
                </div>
              </div>
            )}
            </ProductConsumer>
      );
    }
  }