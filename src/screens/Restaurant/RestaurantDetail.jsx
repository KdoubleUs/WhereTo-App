import { useState, useEffect } from "react";
import { deleteRestaurant, getRestaurant } from "../../services/restaurants";
import { Link, useParams, useNavigate } from "react-router-dom";

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurant = async () => {
      const getSingleRestaurant = await getRestaurant(id);
      setRestaurant(getSingleRestaurant);
    };
    fetchRestaurant();
  }, [id]);
  return (
    <div className="detailContainer">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.category}</p>
      <p>{restaurant.description}</p>
      <p>{restaurant.address}</p>
      <p>{restaurant.phone}</p>
      <button className="detailBtn" id="editDetail">
        <Link to={`/restaurants/${restaurant._id}/edit`} className="detailBtn">
          Edit
        </Link>
      </button>
      <button
        className="detailBtn"
        onClick={() => {
          deleteRestaurant(restaurant._id);
        }}
      >
        Delete restaurant
      </button>
    </div>
  );
}

export default RestaurantDetail;
