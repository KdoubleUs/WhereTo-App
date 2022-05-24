import { Link } from "react-router-dom";
import "../csscomponents/bar.css";
export default function Bar({ bar }) {
  const imageStyle = {
    backgroundImage: `url(${bar.cardImage ? bar.cardImage : bar.image})`,
  };
  return (
    <div className="bar-card">
      <div className="bar-card-image-container" style={imageStyle}></div>
      <div className="card-text">
        <Link to={`/bars/${bar._id}`}>
          <h2 className="bar-name">{bar.name}</h2>
        </Link>
        <p>{bar.address}</p>
        <p>{bar.phone}</p>
      </div>
    </div>
  );
}
