import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/headers/index.jsx'
import Home from './pages/Home/index.jsx'
import ProductListing from './pages/ProductListing/index.jsx'
import ProductPage from './pages/ProductPage/index.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <Routes>
     <Route path={"/"} exact={true} element={<Home/>} />
     <Route path={"/product"} exact={true} element={<ProductListing/>} />
     <Route path={"/products/:category"} exact={true} element={<ProductListing/>} />
     <Route path={"/product/:id"} exact={true} element={<ProductPage/>} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
