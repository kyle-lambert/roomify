import React from "react";
import "./ModalHeader.scss";

import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import Icon from "../../icons/Icon/Icon";

function ModalHeader({ heading }) {
  return (
    <header className="ModalHeader">
      {heading && <h5 className="ModalHeader__heading">{heading}</h5>}
      <button className="ModalHeader__close">
        <Icon>
          <CloseIcon />
        </Icon>
      </button>
    </header>
  );
}

export default ModalHeader;
