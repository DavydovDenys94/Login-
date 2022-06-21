import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";

const mailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  // const [mail, setMail] = useState("");
  // const [mailIsValid, setMailIsValid] = useState(true);
  // const [password, setPassword] = useState("");
  // const [passwordValid, setPasswordValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  const [mailState, dispatchEmail] = useReducer(mailReducer, {
    value: "",
    isValid: true,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: true,
  });

  const { isValid: mailIsValid } = mailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(mailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [mailIsValid, passwordIsValid]);
  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       mailState.value.includes("@") && passwordState.value.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [mailState.value, passwordState.value]);

  const mailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });
    // setMail(e.target.value);
    // setFormIsValid(e.target.value.includes("@") && passwordState.isValid);
  };
  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: e.target.value });
    // setPassword(e.target.value);
    // setFormIsValid(e.target.value.trim().length > 6 && mailState.isValid);
  };
  const validateMailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
    // setMailIsValid(mailState.isValid);
  };
  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
    // setPasswordValid(passwordState.value.trim().length > 6);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(mailState.value, passwordState.value);
    console.log({ mail: mailState.value, password: passwordState.value });
    // mailState.value = "";
    // setMail("");
    // passwordState.value = "";
    // setPassword("");
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            !mailState.isValid ? classes.invalid : ""
          }`}
        >
          <label>E-Mail</label>
          <input
            type="email"
            value={mailState.value}
            onChange={mailChangeHandler}
            onBlur={validateMailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            !passwordState.isValid ? classes.invalid : ""
          }`}
        >
          <label className={`${classes.control}`}>Password</label>
          <input
            type="password"
            value={passwordState.value}
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
