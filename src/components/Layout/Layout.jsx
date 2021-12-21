import React, { useEffect } from "react";
import Routers from "../Routers";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import "./Layout.css";

import { BrowserRouter, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemmeAction from "../../redux/actions/ThemeActions";
import Login from "../../pages/login/login";

function Layout() {
  const themeReducer = useSelector(state => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemmeAction.setMode(themeClass));

    dispatch(ThemmeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={props => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <SideBar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Login></Login>
                <Routers />
              </div>
            </div>
            {/* <Login/> */}
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
