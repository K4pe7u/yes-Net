import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Faq from "./pages/Faq/Faq";
import Promotion from "./pages/Promotion/Promotion";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/promotion" element={<Promotion />} />
    </Routes>
  );
}

export default App;
