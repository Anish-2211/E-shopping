import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopPage from './Pages/ShopPage'
import ShopCategory from './Pages/ShopCategory'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage'
import LoginSignupPage from './Pages/LoginSignupPage'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'





function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ShopPage />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category ="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner}  category ="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner}  category ="kids" />} />
          <Route path='/product' element={<ProductPage />}>
          <Route path=':productId' element={<ProductPage />} />
          </Route>

          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginSignupPage />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    
      </div>
       
    
  )
}

export default App
