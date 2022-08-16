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
import Yourorder from './Components/Yourorder';
import Contextprovider from './Context/Contextprovider';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <BrowserRouter>
      <Contextprovider>
        <Navbar />
        
        <Changepass/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/yourorder" element={<Yourorder/>} />
        </Routes>
        <Footer/>
        <ToastContainer/>
        </Contextprovider>
      </BrowserRouter>
    </>
  )
}

export default App