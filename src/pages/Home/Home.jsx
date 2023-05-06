import "./Home.css";

import { useState } from "react";

import { MdSearch } from "react-icons/md";

import data from "../../data.json";
import Card from "../../components/Card/Card";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="home">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a country"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="countries-container">
        {data
          .filter((country) => {
            return search.toLowerCase() === ""
              ? country
              : country.name.toLowerCase().includes(search);
          })
          .map((country) => (
            <Card country={country} />
          ))}
      </div>
    </div>
  );
}

// cor de fundo: #202D36

export default Home;
