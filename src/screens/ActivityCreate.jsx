import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createActivity } from '../services/activities';

export default function activityCreate() {
  const [activity, setActivity] = useState({
    image: '',
    name: '',
    category: '',
    description: '',
    address: '',
    phone: '',
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivity({
      ...activity,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createActivity(activity);
    navigate('/activities', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      
        placeholder="image"
        name=""
        value={activity.image}
        onChange={handleChange}
      />
      <input
        placeholder="What's it called?"
        name="name"
        value={activity.name}
        onChange={handleChange}
      />
      <input
        placeholder="Make a category"
        name="category"
        value={activity.category}
        onChange={handleChange}
      />
      <input
        placeholder="Tell me more"
        name="description"
        value={activity.description}
        onChange={handleChange}
      />
      <input
        placeholder="Where is it?"
        name="address"
        value={activity.address}
        onChange={handleChange}
      />
      <input
        placeholder="How do you reach them?"
        name="phone"
        value={activity.phone}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
