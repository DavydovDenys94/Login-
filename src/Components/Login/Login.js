import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";

const Login = (props) => {
  const [mail, setMail] = useState("");
  const [mailIsValid, setMailIsValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // const user = { mail: mail, password: password };
    // if (password.trim().length <= 7) {
    //   alert("Invalid length of mail");
    //   return;
    // }

    props.onLogin(mail, password);
    console.log({ mail: mail, password: password });
    setMail("");
    setPassword("");
  };
  const mailChangeHandler = (e) => {
    setMail(e.target.value);
    setFormIsValid(e.target.value.includes("@") && password.trim().length > 6);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setFormIsValid(e.target.value.trim().length > 6 && mail.includes("@"));
  };
  const validateMailHandler = () => {
    setMailIsValid(mail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPasswordValid(password.trim().length > 6);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !mailIsValid ? classes.invalid : ""
          }`}
        >
          <label>E-Mail</label>
          <input
            type="email"
            value={mail}
            onChange={mailChangeHandler}
            onBlur={validateMailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            !passwordValid ? classes.invalid : ""
          }`}
        >
          <label className={`${classes.control}`}>Password</label>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            className={classes.btn}
            type="submit"
            onClick={props.setLogIn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;
