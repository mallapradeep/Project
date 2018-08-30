import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import blazer from '../../img/blazer.jpg';
import denim from '../../img/denim1.jpg';
import combo from '../../img/combo.jpg';
import shop from '../../img/shop.jpg';



export default class Dashboard extends Component {
  render() {
    return (
      <div>
        
    
       
                          <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
                                <ol  className="carousel-indicators">
                                  <li data-target="#carouselExampleIndicators" data-slide-to="0"  className="active"></li>
                                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div  className="carousel-inner">
                                  <div  className="carousel-item active">
                                    <img  className="d-block w-100" src={shop} alt="First slide"/>
                                  </div>
                                  <div  className="carousel-item">
                                    <img  className="d-block w-100" src={blazer} alt="Second slide"/>
                                  </div>
                                  <div  className="carousel-item">
                                
                                    <img  className="d-block w-100" src={denim}  alt="Third slide"/>
                                  </div>
                                </div>
                                <a  className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                  <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span  className="sr-only">Previous</span>
                                </a>
                                <a  className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                  <span  className="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span  className="sr-only">Next</span>
                                </a>
                              </div>
                <style>
                  <body className="body">
                    <div className="box1">Box1</div>
                    <div className="box2">Box2</div>
                    <div className="box3">Box3</div>
                  </body>
                 
                </style>
      </div>
    )
  }
}
