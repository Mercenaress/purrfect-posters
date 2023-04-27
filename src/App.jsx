import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import Preview from './pages/Preview'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const [catPosters, setCatPosters] = useState([]);

  useEffect(() => {
    fetch('./public/cats.json')
    .then(response => response.json())
    .then(data => setCatPosters(data))
  }, []);

  useEffect(() => {
    if (catPosters.length > 0) {
      dispatch(fillStock(catPosters));
    }
  }, [catPosters]);

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
