import { useState, useEffect } from "react";
import { getBars } from "../../services/bars.js";
import Bar from "../../components/Bar.jsx";
import "../../csscomponents/bar.css";
import gif from "../../Dual Ball-1s-200px.gif";

const barImages = [
  { cardImage: "/bars/patent-pending.png" },
  { cardImage: "/bars/fresh-kills.png" },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  { cardImage: "/bars/hi-pokito.jpeg" },
  {},
  {},
  {},
  { cardImage: "/bars/terra-blues.jpg" },
];

export default function Bars() {
  const [bars, setBars] = useState([]);
  const [load, setLoad] = useState(null);
  useEffect(() => {
    const fetchBars = async () => {
      const allBars = await getBars();
      console.log("all bars:", allBars);
      setBars(allBars);
    };
    setInterval(() => {
      fetchBars();
      setLoad("complete");
    }, 1500);
  }, []);
  const preLoader = <img src={gif} alt="preloading" id="bar-preloader" />;
  return (
    <div>
      <h1 className="title">Bars</h1>
      <div className="bar-card-row">
        {!load
          ? preLoader
          : bars.map((barData, idx) => {
              barData = { ...barData, ...barImages[idx] };
              return <Bar bar={barData} />;
            })}
      </div>
    </div>
  );
}
