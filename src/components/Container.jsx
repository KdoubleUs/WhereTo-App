import React from "react";
import containerStyle from "../csscomponents/container.css";
import { Link } from "react-router-dom";
function Container({ restaurant }) {
  return (
    <div className="infoContainer">
      <h1 className="title">{restaurant.name}</h1>
      <span>
        <p> Category:{restaurant.category}</p>
      </span>
      <span>
        <p>Address:{restaurant.address}</p>
      </span>
      <span>
        <p>Description:{restaurant.description}</p>
      </span>
      <span>
        <p>Phone:{restaurant.phone}</p>
      </span>
      <span>
        <Link to={`/restaurants/${restaurant._id}`} className="editButton">
          More Info
        </Link>
      </span>
    </div>
  );
}

export default Container;
