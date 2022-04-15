import { useState, useEffect } from 'react'
import { deleteActivitiy, getActivitiy } from '../services/activities';
import { Link, useParams, useNavigate } from "react-router-dom";

export default function activitiyDetail() {
  const [activitiy, setActivitiy] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const fetchActivitiy = async () => {
      let oneactivitiy = await getActivitiy(id)
      setActivitiy(oneactivitiy)
    }

    fetchActivitiy()
  }, [id])

  return (
    <div>
      <h2>{activitiy.image}</h2>
      <p>{activitiy.name}</p>
      <p>{activitiy.category}</p>
      <p>{activitiy.description}</p>
      <p>{activitiy.address}</p>
      <p>{activitiy.phone}</p>
      <div>
        <button>
          <Link to={`/activities/${activitiy._id}/edit`}>Edit activitiy</Link>
        </button>
        <button onClick={() => {
          deleteActivitiy(activitiy._id)
          navigate("/activities", { replace: true })
        }}>Delete activitiy</button>
      </div>
    </div>
  )
}
