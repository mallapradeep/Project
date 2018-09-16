import React, { Component } from "react";
import { connect } from "react-redux";
import { searchProduct } from "../../ducks/reducer";
import { Link } from "react-router-dom";
import ShoppingCart from "../../img/shopping-cart.png";
import top from '../Search/top.png';
import './Search.css';


class Search extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  search(event) {
    if (event.target.name === "Search") {
      console.log(this.state.name);
      const { searchProduct } = this.props;
      const { name } = this.state;

      searchProduct(name);
    }
  }

  // render(){
  //   return(
  //     <div>
  //       <a className="logo" href="#">
  //       {/* <img className='logo1' src = {top} alt="logo" /> */}
  //       LUGAWEAR.
  //     </a>

  //     <ul className="navbar-nav ">
  //     <li className="nav-item active">

  //       <Link to="/" className="nav-link">
  //         {/* <a className="nav-link" href="#"> */}
  //           HOME <span className="sr-only">(current)</span>
  //         {/* </a> */}
  //       </Link>
  //     </li>

  //     <li className="nav-item active">
  //       <Link to="/shop">
  //         <a className="nav-link" href="#">
  //           SHOP
  //         </a>
  //       </Link>
  //     </li>

  //     <li className="nav-item active">
  //       <Link to="/category">
  //         <a className="nav-link" href="#">
  //           CATEGORY
  //         </a>
  //       </Link>
  //     </li>

  //     <li className="nav-item active">
  //       <Link to="/login">
  //         <a className="nav-link " href="#">
  //           LOGIN
  //         </a>
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //       <Link to="/cart">
  //       <a className="nav-link " href="#">
  //           CART
  //         </a>
  //         {/* <img src={ShoppingCart} height="30x" width="30px" /> */}
  //       </Link>
  //     </li>
  //     </ul>
  //     </div>
  //   )
  // }
     
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
           {/* <img className='logo1' src = {top} alt="logo" /> */}
           LUGAWEAR.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item active">

                <Link to="/" className="nav-link">
                  {/* <a className="nav-link" href="#"> */}
                    HOME <span className="sr-only">(current)</span>
                  {/* </a> */}
                </Link>
              </li>

              <li className="nav-item active">
                <Link to="/shop">
                  <a className="nav-link" href="#">
                    SHOP
                  </a>
                </Link>
              </li>

              <li className="nav-item active">
                <Link to="/category">
                  <a className="nav-link" href="#">
                    CATEGORY
                  </a>
                </Link>
              </li>

              <li className="nav-item active">
                <Link to="/login">
                  <a className="nav-link " href="#">
                    LOGIN
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/cart">
                <a className="nav-link " href="#">
                    CART
                  </a>
                  {/* <img src={ShoppingCart} height="30x" width="30px" /> */}
                </Link>
              </li>

               

            </ul>

            {/* //<a  className="nav-link disabled" href="#">CART</a> */}

            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                name="Search"
                type="submit"
                onClick={this.search}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  state => state,
  { searchProduct }
)(Search);
