import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Thankyou from '../Thankyou/Thankyou';
import './Checkout.css';
import { connect } from "react-redux";
import logo from '../Checkout/logo.png';


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 10000
    };
  }

  onToken = token => {
    token.card = void 0;
    axios
      .post("/api/checkout", { token, amount: this.state.amount })
      .then(res => {
        axios.delete('/api/deleteCart')
        this.props.history.push('/thankyou')
      });
  };

  render() {
    return (
      <div className='pay'>
      <h2>ORDER SUMMARY</h2>
 
        <h4>Total: ${this.props.totalCost}</h4>
    
      <StripeCheckout
        name="LUGAWEAR."
        description="Quality assured"
        image={logo}
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={this.props.totalCost*100}
      />
     </div>
    );
  }
}

function mapStateToProps(state) {
  const {  totalCost } = state;

  return {
    
    totalCost
  };
}

export default connect(mapStateToProps, null)(Checkout);
