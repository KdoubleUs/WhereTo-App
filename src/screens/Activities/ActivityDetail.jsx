import { useState, useEffect } from 'react'
import { deleteActivity, getActivity } from '../services/activities';
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ActivityDetail() {
  const [activity, setActivity] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const fetchActivity = async () => {
      let oneactivity = await getActivity(id)
      setActivity(oneactivity)
    }

    fetchActivity()
  }, [id])

  return (
    <div>
      <h2>{activity.image}</h2>
      <p>{activity.name}</p>
      <p>{activity.category}</p>
      <p>{activity.description}</p>
      <p>{activity.address}</p>
      <p>{activity.phone}</p>
      <div>
        <button>
          <Link to={`/activities/${activity._id}/edit`}>Edit activity</Link>
        </button>
        <button onClick={() => {
          deleteActivity(activity._id)
          navigate("/activities", { replace: true })
        }}>Delete activity</button>
      </div>
    </div>
  )
}
