import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import Preview from './pages/Preview'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Admin/>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/editproduct' element={<EditProduct/>} />
          <Route path='/preview' element={<Preview/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
