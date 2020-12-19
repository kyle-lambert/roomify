import React from "react";
import "./FormInputGroup.scss";

function FormInputGroup({ inputLabel, ...rest }) {
  return (
    <div className="FormInputGroup">
      {inputLabel && <label className="FormInputGroup__label">{inputLabel}</label>}
      <input {...rest} className="FormInputGroup__input" />
    </div>
  );
}

export default FormInputGroup;
