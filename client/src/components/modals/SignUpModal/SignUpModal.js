import React from "react";

import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";

import SignUpForm from "../../forms/SignUpForm/SignUpForm";

function SignUpModal(props) {
  return (
    <Modal>
      <ModalHeader heading="Sign Up" />
      <ModalContent>
        <SignUpForm />
      </ModalContent>
      <ModalFooter displayCopy="Already have an account?" buttonLabel="Login" />
    </Modal>
  );
}

export default SignUpModal;
