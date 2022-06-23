import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/cart' exact element={<Cart/>} />
            <Route path='/notfound' element={<NotFound/>} />
            <Route path='/' exact element={<Home/>} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
