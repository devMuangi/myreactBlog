import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { ProductConsumer } from '../Context/context';

export default class Blogpage extends Component {
  render() {
    // const { id, blogTitle, subtitle, blogImage, author, blogText, postedOn } = this.props.blog;
    return (
      <ProductConsumer>
        {blog => {
          // const { id, blogTitle, subtitle, blogImage, author, blogText, postedOn } = blog.singleBlog;
          return (
            <div>
              {/* <h1>{blogTitle}</h1> */}
              <h1>hello from singleBlog</h1>
            </div>
          );
        }}
      </ProductConsumer>
    
    )
  }
}
