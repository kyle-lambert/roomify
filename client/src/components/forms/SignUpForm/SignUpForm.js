import React from "react";
import "./SignUpForm.scss";

import FormInputGroup from "../FormInputGroup/FormInputGroup";
import Button from "../../buttons/Button/Button";

function SignUpForm(props) {
  return (
    <form action="" className="SignUpForm">
      <div className="SignUpForm__item">
        <FormInputGroup inputLabel="Username" name="username" placeholder="Steve123" />
      </div>
      <div className="SignUpForm__item">
        <FormInputGroup inputLabel="Email Address" name="email" placeholder="stevejobs@gmail.com" />
      </div>
      <div className="SignUpForm__item">
        <FormInputGroup inputLabel="Password" name="password" placeholder="123456" />
      </div>
      <div className="SignUpForm__item">
        <Button buttonFullWidth>Login</Button>
      </div>
    </form>
  );
}

export default SignUpForm;
