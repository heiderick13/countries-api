import "./DetailedCard.css";

function DetailedCard({ country }) {
  return (
    <div
      className="flex"
      style={{
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="detailed-card flex">
        <div className="img-container flex">
          <img src={country.flags.png} />
        </div>
        <div className="info-container ">
          <h2 className="country-name">{country.name}</h2>
          <div className="data flex">
            <div className="infos1">
              <p className="info">Native Name: {country.nativeName}</p>
              <p className="info">Population: {country.population}</p>
              <p className="info">Region: {country.region}</p>
              <p className="info">Sub Region: {country.subregion}</p>
              <p className="info">Capital: {country.capital}</p>
            </div>
            <div className="infos2">
              <div className="info">
                Top Level Domain: {country.topLevelDomain}
              </div>
              <div className="info">
                Currencies:{" "}
                {country.currencies.map((currency) => (
                  <span>{currency.name}</span>
                ))}
              </div>
              <div className="info">
                Languages:{" "}
                {country.languages.map((lang) => (
                  <span className="lang">{lang.name}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="borders flex">
            Border Countrys:
            {country.borders &&
              country.borders.map((border) => (
                <div className="border">{border}</div>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailedCard;
