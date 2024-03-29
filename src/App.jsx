import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'

const App = () => {

  return (
    <div className='flex flex-col min-h-screen font-Poppins text-primaryBg'>
      <Navbar />
      <div className=' min-h-[90vh] flex flex-wrap mt-16 py-10 px-6 justify-start gap-12'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/products/:productID' element={<SingleProduct />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/updateproduct/:productID' element={<UpdateProduct />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App