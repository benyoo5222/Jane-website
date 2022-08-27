import "./App.css";
import Home from "./Components/Home/Home";
import HireJane from "./Components/Hire-Jane/HireJane";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hire-jane" element={<HireJane />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
