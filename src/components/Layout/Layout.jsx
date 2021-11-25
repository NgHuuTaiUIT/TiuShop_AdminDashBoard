import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routers from "../Routers";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import "./Layout.css";
function Layout() {
  return (
    <BrowserRouter>
      <Route
        render={props => (
          <div className="layout">
            <SideBar {...props} />
            <div className="layout__content">
              <TopNav />
              <div className="layout__content-main">
                <Routers />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
