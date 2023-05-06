import "./Navbar.css";

import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <nav>
      <h2 className="page-title">Where in the world?</h2>

      {isDarkTheme ? (
        <BsFillMoonFill
          onClick={changeTheme}
          style={{ cursor: "pointer", fill: "white", fontSize: "1.4rem" }}
        />
      ) : (
        <BsFillSunFill
          onClick={changeTheme}
          style={{ cursor: "pointer", fill: "black", fontSize: "1.4rem" }}
        />
      )}
    </nav>
  );
}

export default Navbar;
