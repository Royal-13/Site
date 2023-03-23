import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='../pages/services' element={<Services />} />
          <Route path='../pages/products' element={<Products />} />
          <Route path='../pages/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
