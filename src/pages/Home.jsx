import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await axios.get(`https://${import.meta.env.VITE_API_KEY}.mockapi.io/products`);
        setProducts(response.data);
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className='flex flex-wrap justify-start gap-[4%] mb-6'>
            {
                products.map(({ id, name, image, category, price }) => {
                    return (
                        <ProductCard key={id} id={id} name={name} image={image} category={category} price={price} />
                    )
                })
            }
        </div>
    )
}

export default Home