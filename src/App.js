import "./App.css";
import styled from "styled-components";
import Navigation from "./components/navigation";
import Title from "./components/Title";
import { Link, Routes, Route } from "react-router-dom";
import Submit from "./components/Submit";
import Contact from "./components/Contact";
import RestaurantCreate from "./screen/RestaurantCreate";
import Restaurants from "./screen/Restaurants";
import RestaurantDetail from "./screen/RestaurantDetail";
function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/submit" element={<Contact />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/spots/create" element={<RestaurantCreate />} />
      </Routes>
    </div>
  );
}

export default App;
