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

  //componentDidMount gets d cart every time there is any changes in d page
  componentDidMount() {
    this.getCart();
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
      this.getCart();
    });
  }

  // addToQuantity(id) {
  //     this.props.addToCart(id);
  //     axios.put(`/api/cart/${id}`);

  addToQuantity(obj) {
    this.props.addToCart(obj);
    // axios.update("/api/cart", obj);
    axios.post("/api/cart", obj).then(res => {
      this.getCart();
    });
    console.log(obj);
  }

  deleteFromQuantity(id) {
    console.log(id);
    this.props.deleteFromCart(id);
    axios.delete(`/api/cart/${id}`).then(res => {
      this.getCart();
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
        <div className="cart py-5" key={i}>
          {/* <div>{i + 1}</div> */}
      

          <img src={product.image} className="cart-image" />

          
          <div className="cart-price">${product.price}</div>

        
          <div className="cart-quantity">{product.quantity}</div>

          <button className="plus" onClick={() => this.addToQuantity(product)}>+</button>

         

          <button className="minus" onClick={() => this.deleteFromQuantity(product.cart_id)}>
            -
          </button>

          <button className="delete-product" onClick={() => this.deleteFromCart(product.product_id)}>
            <img width="20px" height="20px" src={Delete} />
          </button>
        </div>
      );
    });

    return (
          <div className="container cart-flow">
            <div className="cart-container bg-dark">
              <h6 className="product-title" >Product</h6>
              <h6 className="product-price" >Price</h6>
              <h6 className="product-quantity" >Quantity</h6>
              <h6 className="product-total" >Total</h6>
              </div>
              <div>{mappedCart}</div>
              <div className="cart-total">${this.props.totalCost}</div>

              <Link to="/form">
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
