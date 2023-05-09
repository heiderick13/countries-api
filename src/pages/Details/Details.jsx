import { useParams, Link } from "react-router-dom";

import "./Details.css";
import Card from "../../components/Card/Card";

function Details({ data }) {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <Link to={"/"} className="return-btn">
        Home
      </Link>
      {data
        .filter((country) => `:${country.name}` === name)
        .map((country) => (
          <h1>{country.name}</h1>
        ))}
    </>
  );
}

export default Details;
