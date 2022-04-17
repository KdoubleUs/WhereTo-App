import { useState, useEffect } from 'react';
import { getActivities } from '../services/activities.jsx';
import Activities from '../components/Activity.jsx';


export default function Activities() {
  const [activities, setActivities] = useState([])
  
  useEffect(() => {
    const fetchActivities = async () => {
      const activities = await getActivities()
      setActivities(activities)
    }

    fetchActivities()
  }, [])

  return (
    <div>
      <h1>activities</h1>
      {activities.map((activityData) => (
        <activity key={activityData._id} activity={activityData}/>
      ))}
    </div>
  )
}
