import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateActivity, getActivity } from '../services/activities';

export default function ActivityEdit() {
  const [activity, setActivity] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    address: "",
    phone: "",
  });

  let navigate = useNavigate()
  const { id } = useParams()
  
  useEffect(() => {
    const fetchActivity = async () => {
      let activity = await getActivity(id)
      setActivity(activity)
    }

    fetchActivity()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setActivity({
      ...activity,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateActivity(id, activity)
    navigate("/activities", { replace: true })
  }

  return (
    <form onSubmit={handleSubmit} >
        <label>activity</label>
        <input
          placeholder="activity name"
          name="name"
          value={activity.name}
          onChange={handleChange}
          required
        ></input>

        <label>Location</label>
        <input
          placeHolder="activity address"
          name="address"
          value={activity.address}
          onChange={handleChange}
          required
        ></input>
        <label>Category</label>
        <input
          placeholder="category of food"
          name="category"
          value={activity.category}
          onChange={handleChange}
          required
        ></input>
        <label>Phone</label>
        <input
          placeholder="phone-number"
          name="phone"
          value={activity.phone}
          onChange={handleChange}
        ></input>
        <button type="submit">
          Submit Form
        </button>
      </form>
  )
}
