import React from "react";

import "./button.scss";

export const Button1 = (props) => {
  return (
    <button
      style={{
        background: props.backColor,
        width: props.size.width,
        height: props.size.height,
      }}
      className="button1"
      type="submit"
    >
      {props.value}
    </button>
  );
};
