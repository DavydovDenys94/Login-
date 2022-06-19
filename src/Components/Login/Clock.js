import React, { useState } from "react";

import classes from "./Clock.module.css";
import Card from "../UI/Card";
// const DUMMY__TIME = new Date();

const Clock = () => {
  const [time, setTime] = useState(new Date());

  function refreshClock() {
    setTime(new Date());
  }

  setInterval(refreshClock, 1000);
  return (
    <Card className={classes.clock}>
      <h3>{`Time: ${time.toLocaleTimeString()}`}</h3>
    </Card>
  );
};
export default Clock;
