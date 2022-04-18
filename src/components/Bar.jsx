import { Link } from "react-router-dom";
export default function Bar({ bar }) {
  return (
    <div>
      <Link to={`/bars/${bar._id}`}>
        <h2>{bar.name}</h2>
      </Link>
    </div>
  );
}
