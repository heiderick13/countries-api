import "./Card.css";

function MovieCard({ country }) {
  return (
    <div className="country-card">
      <img className="country-img" src={""} alt={country.title} />
      <h3 className="country-title"></h3>
      <p className="country-popularity flex">
        <span className="icon"></span>
        <span className="stats"></span>
      </p>
      <p className="country-date flex">
        <span className="icon"></span>
        <span className="stats"></span>
      </p>
    </div>
  );
}

export default MovieCard;
