import { Routes, Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import './App.css'
import husky from './Icons/giphy.gif'

const Home = lazy(() => import('./Pages/Home/Home'))

const NotFound = () => {
  return (
    <>
      <div>Page Not Found</div>
      <img src={husky} alt='husky' />
    </>
  )
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
