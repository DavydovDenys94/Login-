import React, { useState } from "react";

import Login from "./Components/Login/Login";
import MainHeader from "./Components/MainHeader/MainHeader";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const logOn = () => {
    setIsLogged(true);
  };
  const logOutHandler = () => {
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
    </div>
  );
}

export default App;
