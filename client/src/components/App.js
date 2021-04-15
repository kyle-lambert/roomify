import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import SignUpModal from "./modals/SignUpModal/SignUpModal";
import LoginModal from "./modals/LoginModal/LoginModal";

import LandingPage from "../pages/LandingPage/LandingPage";

function App(props) {
  return (
    <div className="App">
      {/* <LoginModal /> */}
      <SignUpModal />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
