import React from "react";
import "./App.scss";

import SignUpModal from "./modals/SignUpModal/SignUpModal";
import LoginModal from "./modals/LoginModal/LoginModal";
import UserNavigation from "../components/navigation/UserNavigation/UserNavigation";

function App(props) {
  return (
    <div>
      {/* <LoginModal /> */}
      <SignUpModal />
      {/* <UserNavigation /> */}
    </div>
  );
}

export default App;
