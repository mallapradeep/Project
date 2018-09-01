import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./component/Login/Login";
import Shop from "./component/Shop/Shop";
import Cart from "./component/Cart/Cart";
import Dashboard from "./component/Dashboard/Dashboard";
import Checkout from "./component/Checkout/Checkout";
import Private from "./component/Private/Private";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Login} path="/login" />
    <Route component={Shop} path="/shop" />
    <Route component={Cart} path="/cart" />
    <Route component={Checkout} path="/checkout" />
    <Route path="/private" component={Private} />

  </Switch>
);
