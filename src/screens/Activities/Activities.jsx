import { useState, useEffect } from "react";
import { getActivities } from "../../services/activities.js";
import Activity from "../../components/Activity.jsx";

export default function Activities() {
  const [singleActivity, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const getAllActivities = await getActivities();
      setActivities(getAllActivities);
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>activities</h1>
      {singleActivity.map(activityData => (
        <Activity key={activityData._id} activity={activityData} />
      ))}
    </div>
  );
}
