import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRestaurant, getRestaurant } from '../../services/restaurants';
function RestaurantEdit() {
  const [restaurant, setRestaurants] = useState({
    image: '',
    name: '',
    category: '',
    address: '',
    description: '',
    phone: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      let getSingleRestaurant = await getRestaurant(id);
      setRestaurants(getSingleRestaurant);
    };
    fetchRestaurant();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurants({
      ...restaurant,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateRestaurant(id, restaurant);
  };

  return (
    <div className="restaurantEditContainer">
      <h1>Submit Your Favorite Location</h1>
      <form onSubmit={handleSubmit} className="restaurantEdit">
        <label>Restaurant</label>
        <input
          placeholder="restaurant name"
          name="name"
          value={restaurant.name}
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
        <label>Description</label>
        <input
          placeholder="description"
          name="description"
          value={restaurant.description}
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

export default RestaurantEdit;
