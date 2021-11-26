import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import ThemeActions from "../../redux/actions/ThemeActions";

import "./ThemeMenu.css";

const mode_settings = [
  {
    id: "light",
    name: "Light",
    background: "light-background",
    class: "theme-mode-light"
  },
  {
    id: "dark",
    name: "Dark",
    background: "dark-background",
    class: "theme-mode-dark"
  }
];
const color_settings = [
  {
    id: "orange",
    name: "Orange",
    background: "orange-color",
    class: "theme-color-orange"
  },
  {
    id: "blue",
    name: "Blue",
    background: "blue-color",
    class: "theme-color-blue"
  },
  {
    id: "red",
    name: "Orange",
    background: "red-color",
    class: "theme-color-red"
  },
  {
    id: "cyan",
    name: "Cyan",
    background: "cyan-color",
    class: "theme-color-cyan"
  },
  {
    id: "green",
    name: "Green",
    background: "green-color",
    class: "theme-color-green"
  }
];

const clickOusideRef = (toggle, content) => {
  document.addEventListener("mousedown", e => {
    if (toggle.current && toggle.current.contains(e.target)) {
      content.current.classList.toggle("active");
      console.log(content);
    } else {
      if (content.current && !content.current.contains(e.target)) {
        content.current.classList.remove("active");
      }
    }
  });
};

function ThemeMenu() {
  useEffect(() => {
    const themeClass = mode_settings.find(
      e => e.class === localStorage.getItem("themeMode", "theme-mode-light")
    );
    const colorClass = color_settings.find(
      e => e.class === localStorage.getItem("colorMode", "theme-color-blue")
    );
    setCurrMode(themeClass !== undefined ? themeClass.id : "light");
    setCurrColor(colorClass !== undefined ? colorClass.id : "blue");
  }, []);

  const menu_ref = useRef(null);

  const menu_toggle_ref = useRef(null);

  clickOusideRef(menu_toggle_ref, menu_ref);

  const openMenu = () => menu_ref.current.classList.add("active");

  const closeMenu = () => menu_ref.current.classList.remove("active");

  const [currMode, setCurrMode] = useState("light");

  const [currColor, setCurrColor] = useState("blue");

  const dispatch = useDispatch();

  const setMode = mode => {
    setCurrMode(mode.id);
    localStorage.setItem("themeMode", mode.class);
    dispatch(ThemeActions.setMode(mode.class));
  };

  const setColor = color => {
    setCurrColor(color.id);
    localStorage.setItem("colorMode", color.class);
    dispatch(ThemeActions.setColor(color.class));
  };

  return (
    <div>
      <button
        ref={menu_toggle_ref}
        className="dropdown__toggle"
        onClick={() => openMenu()}>
        <i className="bx bx-palette"></i>
      </button>
      <div ref={menu_ref} className="theme-menu">
        <h4>Theme Settings</h4>
        <button className="theme-menu__close" onClick={() => closeMenu()}>
          <i className="bx bx-x"></i>
        </button>
        <div className="theme-menu__select">
          <span>Choose mode</span>
          <ul className="mode-list">
            {mode_settings.map((item, index) => (
              <li key={index} onClick={() => setMode(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currMode ? "active" : ""
                  }`}>
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="theme-menu__select">
          <span>Choose color</span>
          <ul className="mode-list">
            {color_settings.map((item, index) => (
              <li key={index} onClick={() => setColor(item)}>
                <div
                  className={`mode-list__color ${item.background} ${
                    item.id === currColor ? "active" : ""
                  }`}>
                  <i className="bx bx-check"></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThemeMenu;
