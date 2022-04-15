import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBar, getBar } from '../services/bars';
export default function BarEdit() {
  const [bar, setBar] = useState({
    image: '',
    name: '',
    category: '',
    description: '',
    address: '',
    phone: '',
  });

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBar = async () => {
      let singleBar = await getBar(id);
      setBar(singleBar);
    };

    fetchBar();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBar({
      ...bar,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateBar(id, bar);
    navigate('/bars', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="image"
        name=""
        value={bar.image}
        onChange={handleChange}
      />
      <input
        placeholder="What's it called?"
        name="name"
        value={bar.name}
        onChange={handleChange}
      />
      <input
        placeholder="Make a category"
        name="category"
        value={bar.category}
        onChange={handleChange}
      />
      <input
        placeholder="Tell me more"
        name="description"
        value={bar.description}
        onChange={handleChange}
      />
      <input
        placeholder="Where is it?"
        name="address"
        value={bar.address}
        onChange={handleChange}
      />
      <input
        placeholder="How do you reach them?"
        name="phone"
        value={bar.phone}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
