import { useState, useEffect } from "react";
import { getBars } from "../../services/bars.js";
import Bar from "../../components/Bar.jsx";

export default function Bars() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const fetchBars = async () => {
      const allBars = await getBars();
      console.log("all bars:", allBars)
      setBars(allBars);
    };
    fetchBars();
  }, []);

  return (
    <div>
      <h1>Bars</h1>
      {bars.map(barData => (
        <Bar bar={barData} />
      ))}
    </div>
  );
}
