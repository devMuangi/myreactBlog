import React, { Component } from 'react';
import Blog from '../Blog';
import "./style.scss";
import {BlogsArray} from '../Data';
import {ProductConsumer} from '../Context/context';

export default class Blogs extends Component {
  render() {
    return (
      <React.Fragment>
        
          <div className="blogs-display">
            <ProductConsumer>
              {value => {
                return value.blogs.map(blog => {
                  return <Blog key={blog.id} blog={blog}/>;
                })
              }}
            </ProductConsumer>
          </div>
        
      </React.Fragment>
      /* <Snack /> */
    );
  }
}
