import React from "react";
import "./Button.css";

const Button = (props) => {
  return <div className="btn" key={props.key} onClick={props.addToFavourite}>Add To Favourite</div>;
};

export default Button;
