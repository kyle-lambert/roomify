import React from "react";

import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";
import LoginForm from "../../forms/LoginForm/LoginForm";

function LoginModal(props) {
  return (
    <Modal>
      <ModalHeader heading="Login" />
      <ModalContent>
        <LoginForm />
      </ModalContent>
      <ModalFooter displayCopy="Don't have an account?" buttonLabel="Sign Up" />
    </Modal>
  );
}

export default LoginModal;
