import React from "react";
import { Switch, Route } from "react-router-dom";
import Customers from "../pages/Customer/Customers";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/login/login";
function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routers;
