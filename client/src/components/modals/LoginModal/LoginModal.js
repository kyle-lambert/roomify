import React from "react";
import "./LoginModal.scss";

import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalFooter from "../ModalFooter/ModalFooter";

function LoginModal(props) {
  return (
    <Modal>
      <ModalHeader heading="Login" />
      <div className="LoginModal">fsakjdhfkasjdh</div>
      <ModalFooter displayCopy="Don't have an account?" buttonLabel="Sign Up" />
    </Modal>
  );
}

export default LoginModal;
