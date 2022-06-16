import React from "react";

import Button from "../UI/Button";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}

        {props.isLoggedIn && (
          <li>
            <Button type="submit" onClick={props.logout}>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
