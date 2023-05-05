import { useEffect, useState } from "react";
import data from "./data.json";

function App() {
  return (
    <>
      <h1>App</h1>
      {data.map((country) => (
        <p>{country.name}</p>
      ))}
    </>
  );
}

export default App;
