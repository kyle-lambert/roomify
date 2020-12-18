import React from "react";
import "./App.scss";

import SignUpModal from "../components/modals/SignUpModal/SignUpModal";
import LoginModal from "../components/modals/LoginModal/LoginModal";

function App(props) {
  return (
    <div>
      <LoginModal />
    </div>
  );
}

export default App;
