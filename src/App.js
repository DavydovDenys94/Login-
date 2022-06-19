import React, { useState, useEffect } from "react";

import Login from "./Components/Login/Login";
import MainHeader from "./Components/MainHeader/MainHeader";
import Clock from "./Components/Login/Clock";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const storedUserLogInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLogInInformation === "1") {
      setIsLogged(true);
    }
  }, []);

  const logOn = (mail, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLogged(true);
  };
  const logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogged(false);
  };
  return (
    <div>
      <div>
        <MainHeader onLogout={logOutHandler} isAuthenticated={isLogged} />
      </div>
      <div>
        {!isLogged && <Login onLogin={logOn} />}
        {isLogged && <Home />}
      </div>
      <div>
        <Clock />
      </div>
    </div>
  );
}

export default App;
