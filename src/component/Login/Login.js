import React, { Component } from "react";
import logo from '../Login/logo.png';

import "./Login.css";

export default class Login extends Component {

  login(){
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    //window.location.origin makes it easy for hosting
    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  } 
  render() {
    return (
      <div className="App">
       <img className="logo" src={logo} alt="logo"/>
        <button className="button2" onClick={this.login}>LOGIN</button>
      </div>
    );
  }
}
