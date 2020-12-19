import React from "react";
import "./Button.scss";

function Button(props) {
  const { children, buttonSecondary, buttonFullWidth, ...rest } = props;

  const generateClassNames = (array = []) => {
    if (buttonSecondary) array.push("Button--secondary");
    if (buttonFullWidth) array.push("Button--full-width");

    return array.join(" ");
  };

  return (
    <button {...rest} className={generateClassNames(["Button"])}>
      {children}
    </button>
  );
}

export default Button;
