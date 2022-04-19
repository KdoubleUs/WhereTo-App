import { useState, useEffect } from "react";
import { deleteActivity, getActivity } from "../../services/activities";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../csscomponents/activityStyle.css";

export default function ActivityDetail() {
  const [activity, setActivity] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchActivity = async () => {
      let oneActivity = await getActivity(id);
      setActivity(oneActivity);
    };

    fetchActivity();
  }, [id]);

  return (
    <div className="text">
      <img className="image" src={activity.image} alt="image" />
      <p>{`Name: ${activity.name}`}</p>
      <p>{`Description: ${activity.description}`}</p>
      <p>{`Address: ${activity.address}`}</p>
      <p>{`Phone: ${activity.phone}`}</p>
      <div className="button">
        <button className="edit">
          <Link className="eidtbtn" to={`/activities/${activity._id}/edit`}>
            Edit activity
          </Link>
        </button>
        <Link id="linkId" to={"/activities/"}>
          <button id="backbtn">Back</button>
        </Link>
        <button
          className="deletebtn"
          onClick={() => {
            deleteActivity(activity._id);
            navigate("/activities", { replace: true });
          }}
        >
          Delete activity
        </button>
      </div>
    </div>
  );
}
