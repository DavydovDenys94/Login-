import React, { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./Login.module.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const user = { mail: mail, password: password };
    console.log(user);
  };
  const mailChangeHandler = (e) => {
    setMail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={formSubmitHandler}>
        <div className={`${classes.control}`}>
          <label>E-Mail</label>
          <input type="email" onChange={mailChangeHandler} />
        </div>
        <div className={classes.control}>
          <label className={`${classes.control}`}>Password</label>
          <input type="password" onChange={passwordChangeHandler} />
        </div>
        <Button className={classes.btn} type="submit">
          Login
        </Button>
      </form>
    </Card>
  );
};
export default Login;
