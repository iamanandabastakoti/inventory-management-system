import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import AddProduct from './pages/AddProduct'

const App = () => {

  return (
    <div className='flex flex-col min-h-screen font-Poppins text-primaryBg bg-[#f6f6f6]'>
      <Navbar />
      <div className='flex flex-wrap mt-16 py-10 px-6 justify-start gap-12'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products/:productID' element={<SingleProduct />} />
          <Route path='/addproduct' element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default App