import { useState, useEffect } from 'react';
import { getRestaurant, getRestaurants } from '../../services/restaurants';
import Restaurant from '../../components/Restaurant';
import Container from '../../components/Container';
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
    <div className="restaurants">
      <h1 className="title">Top Choices for Restaurants in NYC</h1>
      {restaurants.map((restaurant) => (
        <div>
          <span>
            <Container restaurant={restaurant} />
          </span>
        </div>
      ))}
    </div>
  );
}
export default Restaurants;
