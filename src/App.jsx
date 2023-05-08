import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <body className="dark-mode">
      <Navbar />
      <Outlet />
    </body>
  );
}

export default App;
