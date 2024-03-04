import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Faq from "./pages/Faq/Faq";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}

export default App;
