import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Form.css'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      emailAddress: "",
      street: "",
      city: "",
      zip: 0,
      state: "",
      phoneNumber: 0
    };
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSave() {
    axios.post("/api/accountInfo", {fullName: this.state.fullName,
                                    emailAddress: this.state.emailAddress,
                                    street: this.state.street,
                                    city: this.state.city,
                                    state: this.state.state,
                                    phoneNumber: this.state.phoneNumber,
                                    }).then( response => {
                                        console.log(response.data)
                                    })
  }

  render() {
    return (
      <div className="checkout-form card p-5 w-50">
        <h2> Shipping Address </h2>
        FULL NAME
        <br />
        <input
          type="text"
          placeholder="John Doe"
          name="fullName"
          value={this.state.fullName}
          onChange={e => this.handleChange(e)}
        />
        EMAIL ADDRESS
        <input
          type="text"
          placeholder=" john.doe@gmail.com"
          name="emailAddress"
          value={this.state.emailAddress}
          onChange={e => this.handleChange(e)}
        />
        <br />
        Street
        <input
          type="text"
          placeholder="123 Main St."
          name="street"
          value={this.state.street}
          onChange={e => this.handleChange(e)}
        />
        CITY
        <input
          type="text"
          placeholder="city"
          name="city"
          value={this.state.city}
          onChange={e => this.handleChange(e)}
        />
        <br />
        <br />
        Zip
        <input
          type="text"
          placeholder="Postal Code"
          name="zip"
          value={this.state.zip}
          onChange={e => this.handleChange(e)}
        />
        STATE
        <input
          type="text"
          placeholder=" State"
          name="state"
          value={this.state.state}
          onChange={e => this.handleChange(e)}
        />
        <br />
        PHONE NUMBER
        <input
          type="text"
          placeholder=" Phone number"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={e => this.handleChange(e)}
        />
        <br />
        
        <Link to="/confirm">
          <button type="button" className="btn btn-success" onClick={() => this.handleSave()}>
            Submit
          </button>
        </Link>
      </div>
    );
  }
}
