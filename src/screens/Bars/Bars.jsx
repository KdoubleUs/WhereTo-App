import { useState, useEffect } from 'react';
import { getBars } from '../../services/bars.js';
import Bar from '../../components/Bar.jsx';
import '../../csscomponents/bars.css';

const barImages = [
  { cardImage: '/bars/patent-pending.png' },
  { cardImage: '/bars/fresh-kills.png' },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  { cardImage: '/bars/hi-pokito.jpeg' },
  {},
  {},
  {},
  { cardImage: '/bars/terra-blues.jpg' },
];

export default function Bars() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      const allBars = await getBars();
      console.log('all bars:', allBars);
      setBars(allBars);
    };
    fetchBars();
  }, []);

  return (
    <div>
      <h1>Bars</h1>
      <div className="bar-card-row">
        {bars.map((barData, idx) => {
          barData = { ...barData, ...barImages[idx] };
          return <Bar bar={barData} />;
        })}
      </div>
    </div>
  );
}
