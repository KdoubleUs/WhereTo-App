import './App.css';
import styled from 'styled-components';
import Navigation from './components/navigation';
import Title from './components/Title';
import { Link, Routes, Route } from 'react-router-dom';
import Submit from './components/Submit';
import Contact from './components/Contact';
import RestaurantCreate from './screens/RestaurantCreate';
import BarCreate from './screens/BarCreate';
import Bars from './screens/Bars';
import BarDetail from './screens/BarDetail';
import BarEdit from './screens/BarEdit';
import RestaurantDetail from './screen/RestaurantDetail';
import RestaurantEdit from './screen/RestaurantEdit';
import Restaurants from './screens/Restaurants';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/submit" element={<Contact />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/restaurants/:id/edit" element={<RestaurantEdit />} />
        <Route path="/spots/create" element={<RestaurantCreate />} />
        <Route path="/bars" element={<Bars />} />
        <Route path="/bars/:id" element={<BarDetail />} />
        <Route path="/bars/add-bar" element={<BarCreate />} />
        <Route path="/bars/:id/edit" element={<BarEdit />} />
      </Routes>
    </div>
  );
}

export default App;
