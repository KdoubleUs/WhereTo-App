import { useState, useEffect } from "react";
import { getRestaurant, getRestaurants } from "../services/restaurants";
import Restaurant from "../components/Restaurant";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const fetchRestaurant = async () => {
      const allRestaurant = await getRestaurants();
      setRestaurants(allRestaurant);
    };
    fetchRestaurant();
  }, []);

  return (
    <div>
      <h1>restaurant</h1>
      {restaurants.map(restaurant => (
        <div>
          <span>
            <h1>{restaurant.name}</h1>
          </span>
          <span>
            <h1>{restaurant.category}</h1>
          </span>
          <span>
            <h1>{restaurant.address}</h1>
          </span>
          <span>
            <h1>{restaurant.category}</h1>
          </span>
          <span>
            <h1>{restaurant.description}</h1>
          </span>
          <span>
            <h1>{restaurant.phone}</h1>
          </span>
        </div>
      ))}
    </div>
  );
}
export default Restaurants;
