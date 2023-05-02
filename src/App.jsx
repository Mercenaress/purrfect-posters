import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './pages/Admin'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import Preview from './pages/Preview'
import { Provider, useDispatch } from 'react-redux'
import { fillInventory } from './app/catPosterSlice'
import store from './app/store'

function App() {
  const dispatch = useDispatch();
  const [catPosters, setCatPosters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./cats.json');
      const catPosters = await response.json();
      setCatPosters(catPosters);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (catPosters.length > 0) {
      dispatch(fillInventory(catPosters));
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
