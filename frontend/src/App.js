import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import Faq2 from './pages/Faq2/Faq2';
import Promotion from './pages/Promotion/Promotion';
import PolicyPrivacy from './pages/PolicyPrivacy/PolicyPrivacy';
import Statute from './pages/Statute/Statute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/faq2" element={<Faq2 />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/policy-privacy" element={<PolicyPrivacy />} />
      <Route path="/statute" element={<Statute />} />
    </Routes>
  );
}

export default App;
