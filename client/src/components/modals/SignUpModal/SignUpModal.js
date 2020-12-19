import React from "react";
import "./SignUpModal.scss";

import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalFooter from "../ModalFooter/ModalFooter";

function SignUpModal(props) {
  return (
    <Modal>
      <ModalHeader heading="Sign Up" />
      <div className="SignUpModal">fsakjdhfkasjdh</div>
      <ModalFooter displayCopy="Already have an account?" buttonLabel="Login" />
    </Modal>
  );
}

export default SignUpModal;
