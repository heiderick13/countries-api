import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <body className={isDarkTheme ? "dark-mode" : "light-mode"}>
      <Navbar isDarkTheme={isDarkTheme} handleChangeTheme={handleChangeTheme} />
      <Outlet />
    </body>
  );
}

export default App;
