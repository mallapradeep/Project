import React, { Component } from "react";
import { Link } from "react-router-dom";

import blazer from "../../img/blazer.jpg";
import denim from "../../img/denim1.jpg";
import combo from "../../img/combo.jpg";
import winter from "../../img/winter.jpg";
import basic from "../../img/basic.jpg";
import women from "../../img/women.jpg";





import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="hero-title">
          {/* <h1 className="display-2">TREAT YOURSELF</h1> */}
          {/* <Link to='/shop'><button className="button">VISIT SHOP</button></Link> */}
        </div>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block img-fluid"  src={women} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={blazer} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={denim} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
            {/* <Map /> */}
        <body className="body">
        
          <div className="box1">
            <div className="box1-title">
            <h1>DENIM WEAR</h1>
            <Link to='/Tops'><button>SEE MORE</button></Link>
            </div>
          </div>

          <div className="box2">
          <div className="box2-title">
    
            <h1>SNEAKERS</h1>
            <Link to='/Footwear'><button>SEE MORE</button></Link>
          </div>
          </div>

          <div className="box3">
          <div className="box3-title">
            <h1>TEEN COLLECTION</h1>
            <Link to='/shop'><button>SEE MORE</button></Link>
          </div>
          </div>

           <footer>
        <div className="row">
            <div className="footer-row1">
                <ul className="footer-nav">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">iOs App</a></li>
                    <li><a href="#">Android App</a></li>

                </ul>
            </div>
            <div className="footer row2">
                <ul className="social-links">
               
                    <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
             
                </ul>
                <div className="footer3">
                <p>LUGAWEAR. All rights reserved.</p>
                </div>
            </div>
        </div>


    </footer>


        </body>
      </div>
    );
  }
}
