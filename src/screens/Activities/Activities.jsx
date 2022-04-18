import { useState, useEffect } from "react";
// import { getActivities } from "../services/activities.js";
// import activities from "../components/activity.jsx";

// export default function Activities() {
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const fetchactivities = async () => {
//       const activities = await getActivities();
//       setActivities(activities);
//     };

//     fetchactivities();
//   }, []);

//   return (
//     <div>
//       <h1>activities</h1>
//       {activities.map(activityData => (
//         <activity key={activityData._id} activity={activityData} />
//       ))}
//     </div>
//   );
// }
