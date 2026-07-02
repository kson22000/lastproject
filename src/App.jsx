import React from 'react'
import Navbar from './components/layouts/Navbar'
import Homepage from './Pages/Homepage'
import Contactus from './Pages/Contactus'
import Aboutus from './Pages/Aboutus'
import Carddetail from './Pages/Carddetail'
import Login from './Pages/Login'
import SearchBar from './Pages/SearchBar'
import Bought from './Pages/Bought'
import Footer from './components/layouts/Footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter basename='/lastproject'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/contact" element={<Contactus/>}></Route>
        <Route path="/about" element={<Aboutus/>}></Route>
        <Route path="/product-detail/:id" element={<Carddetail/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/searchbar' element={<SearchBar/>}></Route>
        <Route path='/Bought' element={<Bought/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
