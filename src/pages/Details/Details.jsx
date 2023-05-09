import { useParams, Link } from "react-router-dom";

import "./Details.css";
import DetailedCard from "../../components/DetailedCard/DetailedCard";

function Details({ data }) {
  const { name } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <Link to={"/"} className="return-btn">
        Home
      </Link>
      {data
        .filter((country) => `:${country.name}` === name)
        .map((country) => (
          <DetailedCard country={country} />
        ))}
    </div>
  );
}

export default Details;
