import { useState, useEffect } from 'react';
import { deleteBar, getBar } from '../services/bars';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function BarDetail() {
  const [bar, setBar] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchBar = async () => {
      let singleBar = await getBar(id);
      setBar(singleBar);
    };

    fetchBar();
  }, [id]);
  return (
    <div>
      <h2>{bar.name}</h2>
      <p>{bar.category}</p>
      <p>{bar.description}</p>
      <p>{bar.address}</p>
      <p>{bar.phone}</p>
      <div>
        <button>
          <Link to={`/bars/${bar._id}/edit`}>Edit bar</Link>
        </button>
        <button
          onClick={() => {
            deleteBar(bar._id);
            navigate('/bars', { replace: true });
          }}
        >
          Delete Bar
        </button>
      </div>
    </div>
  );
}
