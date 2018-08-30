import React, { Component } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Delete from "../../img/delete.png";
import { deleteFromCart } from "../../ducks/reducer";
import axios from "axios";

class Cart extends Component {
  constructor() {
    super();
  }
  // deleteFromCart(id) {
  //   console.log(id);
  //   this.props.deleteFromCart(id);
  //   axios.delete(`/api/cart/${id}`);
  // }

  render() {
    let mappedCart = this.props.cart.map((product, i) => {
      console.log(product.id);
      return (
        <div className="cart" key={product.product_id}>
          <th scope="row">{i + 1}</th>

          <td>
            <img width="80px" height="80px" src={product.image} />
          </td>

          <th scope="col">Price</th>
          <td>${product.price}</td>

          <th scope="col">Quantity</th>

          <td>{product.quantity}</td>
          <button onClick={() => this.props.deleteFromCart(product.product_id)}>
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

        <Link to="/stripe">
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
  { deleteFromCart }
)(Cart);
