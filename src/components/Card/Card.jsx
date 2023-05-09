import "./Card.css";

import { Link } from "react-router-dom";

function Card({ country }) {
  return (
    <Link to={`/details/:${country.name}`} className="country-card">
      <img className="country-img" src={country.flags.png} alt={country.name} />
      <div className="country-info">
        <p className="country-title">{country.name}</p>

        <p className="population">Population: {country.population}</p>
        <p className="region">Region: {country.region}</p>
        <p className="capital">Capital: {country.capital}</p>
      </div>
    </Link>
  );
}

export default Card;
