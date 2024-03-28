import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        description: '',
        image: '',
        category: '',
        price: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const addProduct = async (e) => {
        e.preventDefault();
        const response = await axios.post(`https://${import.meta.env.VITE_API_KEY}.mockapi.io/products`, data);
        // console.log(response.status)
        if (response.status === 201) {
            toast.success('Product Added');
            navigate('/');
        } else {
            alert('Error adding the product');
        }
    }
    const cancelAddProduct = () => {
        navigate('/');
    }
    return (
        <div className='flex justify-center w-full'>
            <form className='w-2/5 flex flex-col gap-4 p-1' onSubmit={addProduct}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input className='border border-buttonBg rounded-lg w-full p-2 focus:outline-none' type="text" name='name' placeholder='Enter the name of the product' autoFocus required onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="description">Description</label>
                    <textarea className='border border-buttonBg rounded-lg w-full p-2 resize-none focus:outline-none' name="description" cols="30" rows="5" placeholder="Enter the product's description" required onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <textarea className='border border-buttonBg rounded-lg w-full p-2 resize-none focus:outline-none' type="text" name='image' cols="30" rows="3" placeholder='Enter the image url of the product' required onChange={handleChange} ></textarea>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input className='border border-buttonBg rounded-lg w-full p-2 focus:outline-none' type="text" name='category' placeholder='Enter the category of the product' required onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price (in $)</label>
                    <input className='border border-buttonBg rounded-lg w-full p-2 focus:outline-none' type="text" name='price' placeholder='Enter the price of the product' required onChange={handleChange} />
                </div>
                <div className='flex justify-evenly'>
                    <button className='border-2 border-buttonBg w-2/5 text-primaryText bg-buttonBg hover:text-buttonBg rounded-lg p-2 text-xl cursor-pointer duration-200 hover:scale-110 hover:bg-primaryText' type="submit">
                        Add Product
                    </button>
                    <button className='border-2 border-red-600 w-2/5 text-primaryText bg-red-600 hover:text-red-600 rounded-lg p-2 text-xl cursor-pointer duration-200 hover:scale-110 hover:bg-primaryText' onClick={cancelAddProduct} type='reset' >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct