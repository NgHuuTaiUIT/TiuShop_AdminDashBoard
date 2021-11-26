import React from "react";
import "./Badge.css";

function Badge(props) {
  return <div className={`badge badge-${props.type}`}>{props.content}</div>;
}

export default Badge;
