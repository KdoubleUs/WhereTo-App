import React from "react";
import containerStyle from "../csscomponents/container.css";
import { Link } from "react-router-dom";
function Container({ restaurant }) {
  return (
    <div className="infoBox">
      <div className="infoContainer">
        <h1 className="title">{restaurant.name}</h1>
        <span>
          <p>{restaurant.category}</p>
        </span>
        <span>
          <p>{restaurant.address}</p>
        </span>
        <span>
          <p>{restaurant.category}</p>
        </span>
        <span>
          <p>{restaurant.description}</p>
        </span>
        <span>
          <p>{restaurant.phone}</p>
        </span>
        <Link to={`/restaurants/${restaurant._id}`} className="editButton">
          EDIT
        </Link>
      </div>
    </div>
  );
}

export default Container;
