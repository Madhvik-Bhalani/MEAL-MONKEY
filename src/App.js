import React from 'react'
import Navbar from './Components/Navbar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home'
import Contact from './Components/Contact';
import Changepass from './Components/Changepass';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Changepass/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App