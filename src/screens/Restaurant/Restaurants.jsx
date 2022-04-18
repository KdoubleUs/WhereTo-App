import { useState, useEffect } from "react";
import { getRestaurant, getRestaurants } from "../../services/restaurants";
import Restaurant from "../../components/Restaurant";
import Container from "../../components/Container";
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
      <h1 className="title">restaurant</h1>
      {restaurants.map(restaurant => (
        <div>
          <span>
            <Container restaurant={restaurant} />
            {/* <h1>{restaurant.name}</h1> */}
          </span>
        </div>
      ))}
    </div>
  );
}
export default Restaurants;
