import "./Home.css";

import { useState } from "react";

import { MdSearch } from "react-icons/md";

import data from "../../data.json";
import Card from "../../components/Card/Card";

function Home() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  return (
    <div className="home">
      <form className="filter-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setRegionFilter(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
      <div className="countries-container">
        {data
          .filter((country) => {
            return search.toLowerCase() === ""
              ? country
              : country.name.toLowerCase().includes(search);
          })
          .filter((country) => {
            return regionFilter.toLowerCase() === "all"
              ? country
              : country.region.toLowerCase() === regionFilter;
          })
          .map((country) => (
            <Card country={country} key={country.numericCode} />
          ))}
      </div>
    </div>
  );
}

// cor de fundo: #202D36

export default Home;
