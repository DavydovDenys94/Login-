import React, { useState } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <div className={classes.header}>
      <h1>A Typical Page</h1>
      <Navigation logout={props.onLogout} isLoggedIn={props.isAuthenticated} />
    </div>
  );
};
export default MainHeader;
