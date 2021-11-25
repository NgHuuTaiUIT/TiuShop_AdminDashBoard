import React, { useRef } from "react";
import "./Dropdown.css";

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

function Dropdown(props) {
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);
  clickOusideRef(dropdown_toggle_el, dropdown_content_el);
  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        {props.icon ? <i className={props.icon} /> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}

        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Dropdown;
