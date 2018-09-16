import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./component/Login/Login";
import Shop from "./component/Shop/Shop";
import Cart from "./component/Cart/Cart";
import Dashboard from "./component/Dashboard/Dashboard";
import Checkout from "./component/Checkout/Checkout";
import Private from "./component/Private/Private";
import Form from "./component/Form/Form";
import Confirm from "./component/Confirm/Confirm";
import Category from "./component/Category/Category";
import Tops from './component/Tops/Tops';
import Bottoms from './component/Bottoms/Bottoms';
import Footwear from './component/Footwear/Footwear';
import Thankyou from './component/Thankyou/Thankyou';
import About from './component/About/About';




export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Login} path="/login" />
    <Route component={Shop} path="/shop" />
    <Route component={Cart} path="/cart" />
    <Route component={Checkout} path="/checkout" />
    <Route path="/private" component={Private} />
    <Route path="/form" component={Form} />
    <Route path="/confirm" component={Confirm} />
    <Route path="/category" component={Category} />
    <Route path="/tops" component={Tops} />
    <Route path="/bottoms" component={Bottoms} />
    <Route path="/footwear" component={Footwear} />
    <Route path="/thankyou" component={Thankyou} />
    <Route path="/about" component={About} />




  </Switch>
);
