import React from "react";

const Input = props => {
  return (
    <input
      onChange={props.changed}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;
