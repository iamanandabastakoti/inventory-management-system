import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get(`https://${import.meta.env.VITE_API_KEY}.mockapi.io/products`);
    setProducts(response.data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div className='flex flex-col min-h-screen font-Poppins text-primaryBg bg-white'>
      <Navbar />
      <div className='flex flex-wrap mt-16 py-10 px-6 justify-evenly gap-12'>
        {
          products.map(({ name, image, category, price }) => {
            return (
              <ProductCard name={name} image={image} category={category} price={price} />
            )
          })
        }
      </div>
    </div>
  )
}

export default App