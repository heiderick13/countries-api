import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className={isDarkTheme ? "body dark-mode" : "body light-mode"}>
      <Navbar isDarkTheme={isDarkTheme} handleChangeTheme={handleChangeTheme} />
      <Outlet />
    </div>
  );
}

export default App;
