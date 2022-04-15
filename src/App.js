import "./App.css";
import styled from "styled-components";
import Navigation from "./components/navigation";
import Title from "./components/Title";
import { Link, Routes, Route } from "react-router-dom";
import Submit from "./components/Submit";
import Contact from "./components/Contact";
import RestaurantCreate from "./screen/RestaurantCreate";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/submit" element={<Contact />} />
        <Route path="/spots/create" element={<RestaurantCreate />} />
      </Routes>
    </div>
  );
}

export default App;
