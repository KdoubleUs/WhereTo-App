import "./App.css";
import styled from "styled-components";
import Navigation from "./components/navigation";
import Title from "./components/Title";
import { Link, Routes, Route } from "react-router-dom";
import Submit from "./components/Submit";
import Contact from "./components/Contact";
import RestaurantCreate from "./screens/Restaurant/RestaurantCreate";
import BarCreate from "./screens/Bars/BarCreate";
import Bars from "./screens/Bars/Bars";
import BarDetail from "./screens/Bars/BarDetail";
import BarEdit from "./screens/Bars/BarEdit";
import Restaurants from "./screens/Restaurant/Restaurants";
import RestaurantDetail from "./screens/Restaurant/RestaurantDetail";
import RestaurantEdit from "./screens/Restaurant/RestaurantEdit";
import About from "./components/About";
import Activities from "./screens/Activities/Activities";
import ActivityCreate from "./screens/Activities/ActivityCreate";
import ActivityDetail from "./screens/Activities/ActivityDetail";
import ActivityEdit from "./screens/Activities/ActivityEdit";

// import Activities from "./screen/activities/Activities";
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
        <Route path="/restaurants/:id/edit" element={<RestaurantEdit />} />
        <Route path="/bars" element={<Bars />} />
        <Route path="/bars/:id" element={<BarDetail />} />
        <Route path="/bars/add-bar" element={<BarCreate />} />
        <Route path="/bars/:id/edit" element={<BarEdit />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/add-activites" element={<ActivityCreate />} />
        <Route path="/activities/:id" element={<ActivityDetail />} />
        <Route path="/activities/:id/edit" element={<ActivityEdit />} />

        {/* <Route path="/activities" element={<Activities />} /> */}

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
