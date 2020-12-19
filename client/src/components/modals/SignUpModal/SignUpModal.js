import React from "react";

import Modal from "../Modal/Modal";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalContent from "../ModalContent/ModalContent";
import ModalFooter from "../ModalFooter/ModalFooter";

function SignUpModal(props) {
  return (
    <Modal>
      <ModalHeader heading="Sign Up" />
      <ModalContent>hjsdkjf</ModalContent>
      <ModalFooter displayCopy="Already have an account?" buttonLabel="Login" />
    </Modal>
  );
}

export default SignUpModal;
