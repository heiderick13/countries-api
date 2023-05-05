import "./Home.css";

import data from "../../data.json";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <>
      {data.map((country) => (
        <Card country={country} />
      ))}
    </>
  );
}

export default Home;
