import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRestaurant } from "../services/restaurants";

export default function RestaurantCreate() {
  const [restaurant, setRestaurant] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    address: "",
    phone: "",
  });

  let navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setRestaurant({
      ...restaurant,
      [name]: value,
    });
    console.log(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    await createRestaurant(restaurant);
    navigate("/restaurants", { replace: true });
  };
  return (
    <div className="restaurantSubmitContainer">
      <h1>Submit Your Favorite Location</h1>
      <form onSubmit={handleSubmit} className="restaurantSubmission">
        <label>Restaurant</label>
        <input
          placeholder="restaurant name"
          name="name"
          value={restaurant.name}
          onChange={handleChange}
          required
        ></input>

        <label>Location</label>
        <input
          placeHolder="restaurant address"
          name="address"
          value={restaurant.address}
          onChange={handleChange}
          required
        ></input>
        <label>Category</label>
        <input
          placeholder="category of food"
          name="category"
          value={restaurant.category}
          onChange={handleChange}
          required
        ></input>
        <label>Phone</label>
        <input
          placeholder="phone-number"
          name="phone"
          value={restaurant.phone}
          onChange={handleChange}
        ></input>
        <button type="submit" className="submitButton">
          Submit Form
        </button>
      </form>
    </div>
  );
}
