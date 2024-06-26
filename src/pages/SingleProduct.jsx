import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProduct = () => {
    const { productID } = useParams();
    const navigate = useNavigate();
    // console.log(productID)
    const [singleProductData, setSingleProductData] = useState([]);
    const fetchSingleProduct = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_LINK}/products/${productID}`);
        setSingleProductData(response.data);
    }
    const deleteProduct = async () => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_LINK}/products/${productID}`);
            if (response.status === 200) {
                toast.success('Product Deleted');
                navigate('/');
            } else {
                alert('Error deleting the product');
            }
        } catch (error) {
            toast.error('Error Updating Product!');
        }
    }
    useEffect(() => {
        fetchSingleProduct();
    }, [])
    return (
        <div className='flex w-4/5 flex-wrap overflow-hidden'>
            <div className='flex w-full gap-4'>
                <img className='w-[40%] bg-gray-300 min-h-80' src={singleProductData.image} alt="" />
                <div className='flex flex-col justify-start gap-10 p-2'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl font-semibold'>{singleProductData.name}</h1>
                        <span className='text-lg'>{singleProductData.description}</span>
                        <span className='text-xl text-gray-500'>{singleProductData.category}</span>
                        <span className='text-2xl font-bold'>${singleProductData.price}</span>
                    </div>
                    <div className='flex gap-6 justify-center'>
                        <Button btnName={'Delete Product'} deleteBtn={true} btnFunc={deleteProduct} />
                        <Link to={`/updateproduct/${productID}`} >
                            <Button btnName={'Update Product'} deleteBtn={false} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct