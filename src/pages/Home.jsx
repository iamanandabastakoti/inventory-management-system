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
        <div className='flex flex-wrap justify-evenly gap-12'>
            {
                products.map(({ id, name, image, category, price }) => {
                    return (
                        <ProductCard id={id} name={name} image={image} category={category} price={price} />
                    )
                })
            }
        </div>
    )
}

export default Home