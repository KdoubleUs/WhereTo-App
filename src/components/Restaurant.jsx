import { Link } from "react-router-dom";
function Restaurant({ restaurant }) {
  return (
    <div className="restaurantContainer">
      <h2> {restaurant.name}</h2>
      <h2>{restaurant.address}</h2>
      <h2> {restaurant.name}</h2>
      <h2>{restaurant.address}</h2>
    </div>
  );
}
export default Restaurant;
