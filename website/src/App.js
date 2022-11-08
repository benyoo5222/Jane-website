import "./App.css";
import Home from "./Components/Home/Home";
import HireJane from "./Components/Hire-Jane/HireJane";
import WhyJane from "./Components/Why-Jane/WhyJane";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hire-jane" element={<HireJane />} />
        <Route path="/why-jane" element={<WhyJane />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
