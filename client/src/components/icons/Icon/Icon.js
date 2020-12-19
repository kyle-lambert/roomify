import React from "react";
import "./Icon.scss";

function Icon({ children, iconSecondary }) {
  const generateClassNames = (base = []) => {
    if (iconSecondary) base.push("Icon--secondary");

    return base.join(" ");
  };
  return <div className={generateClassNames(["Icon"])}>{children}</div>;
}

export default Icon;
