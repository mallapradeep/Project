import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 100
    };
  }

  onToken = token => {
    token.card = void 0;
    axios
      .post("/api/checkout", { token, amount: this.state.amount })
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <StripeCheckout
        name="LUGAWEAR"
        description="Thank you for your purchase"
        image="http://via.placeholder.com/100x100"
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={this.state.amount}
      />
    );
  }
}

export default Checkout;
