import "./App.css";
import Navigation from "./components/navigation";
import Title from "./components/Title";
import { Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Navigation />
      <div>
        <Title />
      </div>
    </div>
  );
}

export default App;
