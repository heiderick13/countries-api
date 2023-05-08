import "./Navbar.css";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function Navbar({ handleChangeTheme, isDarkTheme }) {
  const changeTheme = () => {
    handleChangeTheme();
  };

  return (
    <nav>
      <h2 className="page-title">Where in the world?</h2>

      {isDarkTheme ? (
        <BsFillSunFill
          onClick={changeTheme}
          style={{ cursor: "pointer", fill: "var(--text)", fontSize: "1.4rem" }}
        />
      ) : (
        <BsFillMoonFill
          onClick={changeTheme}
          style={{ cursor: "pointer", fill: "var(--text)", fontSize: "1.4rem" }}
        />
      )}
    </nav>
  );
}

export default Navbar;
