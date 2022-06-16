import React from "react";

import classes from "./Home.module.css";
import Card from "../UI/Card";

const Home = () => {
  return (
    <Card className={classes.home}>
      <h1>Wellcome!</h1>
    </Card>
  );
};
export default Home;
