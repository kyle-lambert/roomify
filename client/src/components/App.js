import React from "react";
import "./App.scss";

import SignUpModal from "./modals/SignUpModal/SignUpModal";
import LoginModal from "./modals/LoginModal/LoginModal";

function App(props) {
  return (
    <div>
      <LoginModal />
    </div>
  );
}

export default App;
