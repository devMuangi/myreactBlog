import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ProductConsumer } from '../Context/context';
import PropTypes from "prop-types";

export default class Blog extends Component {
  render() {
    const { id, blogTitle, subtitle, blogImage, author, blogText, postedOn } = this.props.blog;
    return (
      
          <div className="blog" 
          onClick={()=> console.log("u want to read to read my blogs??")}>
          <Link to="/Blogpage" className="Links">
          <h2>{blogTitle}</h2>
          <h3>{subtitle}</h3>
          <h4>{author}</h4>
          <p>{blogText}</p>
          </Link>
          </div>
    
    );
  }
}

Blog.propTypes = {
  blog:PropTypes.shape({
    id:PropTypes.number,
    blogTitle:PropTypes.string,
    subtitle:PropTypes.string,
    author:PropTypes.string,
    postedOn:PropTypes.string,
    blogText:PropTypes.string,
    blogImage:PropTypes.string,
    blogCategory:PropTypes.string
}).isRequired
};