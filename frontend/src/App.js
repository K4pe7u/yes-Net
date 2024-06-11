import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import husky from './icons/giphy.gif';

const Home = lazy(() => import('./pages/Home/Home'));
const Faq = lazy(() => import('./pages/Faq/Faq'));
const Promotion = lazy(() => import('./pages/Promotion/Promotion'));
const PolicyPrivacy = lazy(() => import('./pages/PolicyPrivacy/PolicyPrivacy'));
const Statute = lazy(() => import('./pages/Statute/Statute'));
const NotFound = () => {
  return (
    <>
      <div>Page Not Found</div>
      <img src={husky} alt="husky" />
    </>
  );
};

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/policy-privacy" element={<PolicyPrivacy />} />
          <Route path="/statute" element={<Statute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
