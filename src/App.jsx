import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
