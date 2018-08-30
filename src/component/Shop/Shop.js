import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Shop.css";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../../ducks/reducer";
import add from "../../img/add-to-cart.png";

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("/api/products").then(response => {
      console.log(response);
      this.setState({
        products: response.data
      });
    });
  }

  //this is for the search bar to get d products from the db
  componentDidUpdate(previousProps) {
    if (previousProps.name != this.props.name) {
      axios.get(`/api/search/${this.props.name}`).then(response => {
        this.setState({
          products: response.data
        });
      });
    }
  }

  addToCart(obj) {
    this.props.addToCart(obj)
    axios.post("/api/cart", { item:  obj  });
  }

  render() {
    console.log(this.state.products);
    let displayProducts = this.state.products.map((item, i) => {
      console.log(item);
      // const {id,  name, description, image, price } = product;
      return (
        <div key={i} style={{ float: "left" }} className="shop">
          <Link to={`/product/${item.img}`}>
            <img width="300px" height="300px" src={item.image} alt="image" />
          </Link>
          <div>
            <div>{item.name}</div>
            <div>{item.description}</div>   
            <div>{item.price}</div>

           
            <button onClick={() => this.addToCart( item )}>Add To Cart</button>
              
            {/* <button><img src={add} width='30px' height='30px' onClick={() => this.props.addToCart( item, 'up' )} /></button> */}
          </div>
        </div>
      );
    });

    return <div>{displayProducts}</div>;
  }
}
function mapStateToProps(state) {
  return { name: state.name };
}

export default connect( mapStateToProps, { addToCart } )(Shop);
