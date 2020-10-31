import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ProductConsumer } from '../Context/context';
import PropTypes from "prop-types";

export default class Blog extends Component {
  render() {
    const { id, blogTitle, subtitle, blogTime, author, blogText, blogImage, blogIntro} = this.props.blog;
    return (
          <ProductConsumer>
          {(value) =>(
              <div className="blog" 
              onClick={()=> value.handleDetail(id)}>
              <Link to="/Blogpage" className="Links">
              <h2>{blogTitle}</h2>
              <h4>{author}</h4> 
              <h6>{blogTime}</h6>
              <p>{blogIntro}</p>
              </Link>
              </div>
          )}
     
          </ProductConsumer>
    
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