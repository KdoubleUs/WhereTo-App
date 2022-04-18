import { Link } from "react-router-dom";
import "../csscomponents/activityStyle.css";

export default function activity({ activity }) {
  return (
    <div className="nameLink">
      <Link id="linkId" to={`/activities/${activity._id}`}>
        <button className="linkbtn">{activity.name}</button>
      </Link>
    </div>
  );
}
