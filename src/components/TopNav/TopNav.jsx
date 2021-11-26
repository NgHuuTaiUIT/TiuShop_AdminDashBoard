import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./TopNav.css";
import notification from "../../assets/JsonData/notification.json";
import { Link } from "react-router-dom";
import user_menus from "../../assets/JsonData/user_menus.json";
import ThemeMenu from "../ThemeMenu/ThemeMenu";

const curr_user = {
  display_name: "Tai Nguyen",
  image:
    "https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/34386210_2078971525704781_1278090406529073152_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wzPanG-4dGcAX8rAg0F&_nc_ht=scontent.fsgn8-2.fna&oh=cd889cca4987f25d15771143fe05cd4f&oe=61C44FF8"
};

const renderNotificationItem = (item, index) => {
  console.log("renderNotificationItem", item);
  return (
    <div className="notification-item" key={index}>
      <i className={item.icon} />
      <span>{item.content}</span>
    </div>
  );
};

const renderUserToggle = curr_user => {
  return (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={curr_user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">{curr_user.display_name}</div>
    </div>
  );
};

const renderUserMenu = (item, index) => {
  console.log("renderUserMenu", item);
  return (
    <Link to="/" key={index}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  );
};

function TopNav() {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here ...." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menus}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        {/* <div className="topnav__right-item">
          <Dropdown icon="bx bx-user" />
        </div> */}
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notification}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
