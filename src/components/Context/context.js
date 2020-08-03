import React, { Component } from 'react';
import { BlogsArray ,projectData ,serviceData ,singularBlog} from '../Data';

const ProductContext = React.createContext();

 class ProductProvider extends Component {
   state = {
     //All data initialized here
     blogs:[],
    singularBlog:singularBlog,
    projectData:projectData,
    //  projectData:[]
    serviceData:serviceData
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
   getBlog = id => {
    const blog = this.state.blogs.find(item => item.id ===id);
    return blog;
  }
  handleDetail = id =>{
    const blog = this.getBlog(id);
    this.setState(()=>{
      return {singularBlog:blog}
    })
  }
  
  render() {
    return (
      <ProductContext.Provider 
      value={{
        ...this.state,
        handleDetail: this.handleDetail
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
