import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Customers from "../pages/Customer/Customers";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/login/login";
import LoginActions from "../redux/actions/LoginActions";

function Routers() {
  const [isLogin, setIsLogin] = useState(false);
  const loginReducer = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setIsLogin(dispatch(LoginActions.getLogin()));
  // }, [isLogin]);

  // if (isLogin) {
  //   return <Login />;
  // } else {
  return (
    <Switch>
      {/* <Login /> */}
      <Route exact path="/" component={Dashboard} />
      <Route path="/customers" component={Customers} />
      {/* <Route path="/login" component={Login} /> */}
    </Switch>
  );
}

export default Routers;
