import { Link } from "react-router-dom";
export default function activity({ activity }) {
  return (
    <div>
      <Link to={`/activities/${activity._id}`}>
        <h2>{activity.name}</h2>
      </Link>
    </div>
  );
}
