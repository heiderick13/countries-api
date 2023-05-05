import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
