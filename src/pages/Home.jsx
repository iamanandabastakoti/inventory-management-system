import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_LINK}/products`);
        setProducts(response.data);
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className='flex w-full flex-wrap justify-start gap-[4%] pb-20'>
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