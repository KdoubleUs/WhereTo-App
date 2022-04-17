import { useState, useEffect } from "react";
import { deleteRestaurant, getRestaurant } from "../services/restaurants";
import { Link, useParams, useNavigate } from "react-router-dom";

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const getRestaurant = await getRestaurant(id);
      setRestaurant(getRestaurant);
    };
    fetchRestaurant();
  }, [id]);
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.category}</p>
      <p>{restaurant.description}</p>
      <p>{restaurant.address}</p>
      <p>{restaurant.phone}</p>
      <button>
        <Link to={`/restaurants/${restaurant.id}/edit`}>Edit</Link>
      </button>
      <button
        onClick={() => {
          deleteRestaurant(restaurant.id);
        }}
      >
        delete restaurant
      </button>
    </div>
  );
}

export default RestaurantDetail;