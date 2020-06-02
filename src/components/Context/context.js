import React, { Component } from 'react';
import { BlogsArray } from '../Data';

const ProductContext = React.createContext();

 class ProductProvider extends Component {
   state = {
     blogs:[],
     //detailProduct:detailProduct
     //BlogsArray
   };
   componentDidMount() {
     this.setBlogs();
   }
   setBlogs = () => {
     let tempBlogs = [];
     BlogsArray.forEach(blog => {
       const singleBlog = { ...blog };
       tempBlogs = [...tempBlogs, singleBlog];
     });
     this.setState(() => {
       return { blogs: tempBlogs };
     });
   };
   handleDetail = ()=>{
     console.log('hello from detail');
   }
   addToCart = ()=>{
    console.log('hello from addToCart');
  }
  render() {
    return (
      <ProductContext.Provider 
      value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
