// import route and components
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Stock from "./components/Stock";
import Dashboard from "./components/Dashboard";

// css
import "./App.css";

function App() {
  // Route components specify each route
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/stocks" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
