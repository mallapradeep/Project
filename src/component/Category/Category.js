import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Category.css';




export default class Category extends Component {
  render() {
    return (
      <div className="category">
        
        <div className="tops-hero">
          <h1 className="tops-title">TOPS</h1>
          <Link to='/tops'>
        <img   style={{objectFit: "cover"}}width="400px" height="600px" src='https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-' alt="image top" />
        </Link>
        </div>

         <div className="tops-hero">
          <h1 className="tops-title">BOTTOMS</h1>
          <Link to='/bottoms'>
        <img style={{objectFit: "cover"}}width="400px" height="600px" src='https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9562830b5cd124982cba956afcdac9f7&auto=format&fit=crop&w=1124&q=80' alt="image top" />
        </Link>
      </div>

         <div className="tops-hero">
          <h1 className="tops-title">FOOTWEAR</h1>
          <Link to='/footwear'>
        <img style={{objectFit: "cover"}} width="400px" height="600px" src='https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c15305e72c1ead61b6b23d4b0041de66&auto=format&fit=crop&w=1351&q=80' alt="image top" />
        </Link>
          </div>
        
        
      </div>
    )
  }
}
