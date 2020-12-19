import React from "react";
import "./LoginForm.scss";

import FormInputGroup from "../FormInputGroup/FormInputGroup";
import Button from "../../buttons/Button/Button";

function LoginForm(props) {
  return (
    <form action="" className="LoginForm">
      <div className="LoginForm__item">
        <FormInputGroup
          inputLabel="Email Address"
          name="emailAddress"
          placeholder="stevejobs@gmail.com"
        />
      </div>
      <div className="LoginForm__item">
        <FormInputGroup inputLabel="Password" name="password" placeholder="123456" />
      </div>
      <div className="LoginForm__item">
        <Button buttonFullWidth>Login</Button>
      </div>
    </form>
  );
}

export default LoginForm;
