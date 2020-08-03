import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ProductConsumer } from '../Context/context';
import Hero from '../Hero';
import Banner from '../Banner';

export default class Blogpage extends Component {
  render() {
    // const { id, blogTitle, subtitle, blogImage, author, blogText, postedOn } = this.props.blog;
    return (
      <ProductConsumer>
        {(value) => {
          const { id, blogTitle, subtitle,author, blogText} = value.singularBlog;
          return (
            <>
             <Hero>
             <Banner title={blogTitle} subtitle={subtitle}>
             </Banner>
             </Hero>
            <div className="blog-container">
              <p className="blog-text">{blogText}</p>
              <h3>{author}</h3>
            </div>
            </>
          );
        }}
      </ProductConsumer>
    
    );
  }
}
