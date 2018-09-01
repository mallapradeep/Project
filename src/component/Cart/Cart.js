import React, { Component } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Delete from "../../img/delete.png";
import { deleteFromCart, addToCart } from "../../ducks/reducer";
import axios from "axios";

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cart: []
    };
  }

  
  componentDidMount() {
   this.getCart()
  }

  getCart() {
    axios.get(`/api/cart`).then(res => {
      console.log(res.data);
      this.setState({
        cart: res.data
      });
    });
  }

  deleteFromCart(id) {
    console.log(id);
    this.props.deleteFromCart(id);
    axios.delete(`/api/cartLine/${id}`).then(res => {
      this.getCart()
  });
  }

  // addToQuantity(id) {
  //     this.props.addToCart(id);
  //     axios.put(`/api/cart/${id}`);
    
    
  addToQuantity(obj) {
    this.props.addToCart(obj);
    // axios.update("/api/cart", obj);
    axios.post("/api/cart", obj).then(res => {
        this.getCart()
    })
    console.log(obj);
  }

  deleteFromQuantity(id) {
    console.log(id);
    this.props.deleteFromCart(id);
    axios.delete(`/api/cart/${id}`).then(res => {
      this.getCart()
  });
  }

  render() {
    //updating quantity in my cart
    let newCart = [];
    for (var i = 0; i < this.state.cart.length; i++) {
      let flag = false;
      for (var j = 0; j < newCart.length; j++) {
        if (this.state.cart[i].product_id === newCart[j].product_id) {
          newCart[j].quantity++;
          flag = true;
        }
      }
      if (!flag) {
        newCart.push(Object.assign({}, this.state.cart[i], { quantity: 1 }));
      }
    }

    let mappedCart = newCart.map((product, i) => {
      console.log(product.id);
      return (
        <div className="cart" key={i}>
          <div>{i + 1}</div>

          <th scope="row">{i + 1}</th>

          <td>
            <img width="80px" height="80px" src={product.image} />
          </td>

          <th scope="col">Price</th>
          <td>${product.price}</td>

          <th scope="col">Quantity</th>
          <td>{product.quantity}</td>

          <button onClick={() => this.addToQuantity(product)}>+</button>
          
          <div className="Quantity">{product.quantity}</div>
          
          <button onClick={() => this.deleteFromQuantity(product.cart_id)}>
            -
          </button>
          

          <button onClick={() => this.deleteFromCart(product.product_id)}>
            <img width="20px" height="20px" src={Delete} />
          </button>
        </div>
      );
    });

    return (
      <div className="cart">
        <h1>SHOPPING CART</h1>
        <br />

        <table className="table table-dark " style={{ width: "38rem" }}>
          {/* <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              
            </tr>
          </thead> */}

          <tbody>
            <tr>
              <div>{mappedCart}</div>
              <th scope="col">Total</th>
              <td>${this.props.totalCost}</td>
            </tr>
          </tbody>
        </table>

        <Link to="/checkout">
          <button type="button" className="btn btn-success">
            Proceed To Checkout
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cart, totalCost } = state;

  return {
    cart,
    totalCost
  };
}

export default connect(
  mapStateToProps,
  { deleteFromCart, addToCart }
)(Cart);
