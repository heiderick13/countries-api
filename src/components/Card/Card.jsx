import "./Card.css";

function MovieCard({ country }) {
  return (
    <div className="country-card">
      <img className="country-img" src={country.flags.png} alt={country.name} />
      <h3 className="country-title">{country.name}</h3>

      <p className="population">Population: {country.population}</p>
      <p className="region">Region: {country.region}</p>
      <p className="capital">Capital: {country.capital}</p>
    </div>
  );
}

export default MovieCard;
