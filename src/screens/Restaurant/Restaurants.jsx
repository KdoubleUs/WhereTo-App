import { useState, useEffect } from "react";
import { getRestaurant, getRestaurants } from "../../services/restaurants";
import Restaurant from "../../components/Restaurant";
import Container from "../../components/Container";
import gif from "../../Dual Ball-1s-200px.gif";
function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(null);
  useEffect(() => {
    const fetchRestaurant = async () => {
      const allRestaurant = await getRestaurants();
      setRestaurants(allRestaurant);
      // setLoaded("complete");z
    };
    setInterval(() => {
      fetchRestaurant();
      setLoaded("complete");
    }, 1500);
  }, []);
  let preLoader = <img src={gif} alt="none" className="preloader" />;
  return (
    <div className="restaurants">
      <h1 className="title">Top Choices for Restaurants in NYC</h1>
      {!loaded
        ? preLoader
        : restaurants.map(restaurant => (
            <div key={restaurant.id}>
              <span>
                <Container restaurant={restaurant} />
              </span>
            </div>
          ))}
    </div>
  );
}
export default Restaurants;
