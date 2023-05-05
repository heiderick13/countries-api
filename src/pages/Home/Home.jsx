import "./Home.css";

import data from "../../data.json";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div className="home">
      {data.map((country) => (
        <Card country={country} />
      ))}
    </div>
  );
}

export default Home;
