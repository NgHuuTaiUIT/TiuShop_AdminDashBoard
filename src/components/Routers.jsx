import React from "react";
import { Switch, Route } from "react-router-dom";
import Customers from "../pages/Customer/Customers";
import Dashboard from "../pages/Dashboard";
function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/customers" component={Customers} />
    </Switch>
  );
}

export default Routers;
