import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
    const { productID } = useParams();
    const navigate = useNavigate();
    // console.log(productID)
    // const [oldData, setOldData] = useState([]);
    const [newData, setNewData] = useState([])

    const fetchOldData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_LINK}/products/${productID}`);
        // setOldData(response.data);
        setNewData(response.data)
    }
    useEffect(() => {
        fetchOldData();
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target
        setNewData({
            ...newData,
            [name]: value
        })
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_LINK}/products/${productID}`, newData)
            if (response.status === 200) {
                toast.success('Product Updated');
                navigate('/');
            } else {
                alert('Error adding the product');
            }
        } catch (error) {
            toast.error('Error Updating Product!');
        }
    }
    const cancelUpdate = () => {
        navigate(-1);
    }

    return (
        <div className='flex justify-center w-full'>
            <form className='w-2/5 flex flex-col gap-4 p-1' onSubmit={updateProduct}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input className='border border-buttonBg rounded-lg w-full p-2 focus:outline-none' type="text" name='name' value={newData.name} placeholder='Enter the name of the product' autoFocus required onChange={handleChange} />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="description">Description</label>
                    <textarea className='border border-buttonBg rounded-lg w-full p-2 resize-none focus:outline-none' name="description" value={newData.description} cols="30" rows="5" placeholder="Enter the product's description" required onChange={handleChange} ></textarea>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <textarea className='border border-buttonBg rounded-lg w-full p-2 resize-none focus:outline-none' type="text" name='image' value={newData.image} cols="30" rows="3" placeholder='Enter the image url of the product' required onChange={handleChange} ></textarea>
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input className='border border-buttonBg rounded-lg w-full p-2 focus:outline-none' type="text" name='category' value={newData.category} placeholder='Enter the category of the product' required onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price (in $)</label>
                    <input className='border border-buttonBg rounded-lg w-full p-2 focus:outline-none' type="text" name='price' value={newData.price} placeholder='Enter the price of the product' required onChange={handleChange} />
                </div>
                <div className='flex justify-evenly'>
                    <button className='border-2 border-buttonBg w-2/5 text-primaryText bg-buttonBg hover:text-buttonBg rounded-lg p-2 text-xl cursor-pointer duration-200 hover:scale-110 hover:bg-primaryText' type="submit">
                        Update Product
                    </button>
                    <button className='border-2 border-red-600 w-2/5 text-primaryText bg-red-600 hover:text-red-600 rounded-lg p-2 text-xl cursor-pointer duration-200 hover:scale-110 hover:bg-primaryText' onClick={cancelUpdate} type='reset' >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct