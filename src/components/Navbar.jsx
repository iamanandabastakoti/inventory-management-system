import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    // console.log(location.pathname);
    return (
        <div className='fixed z-50 w-full bg-navbarBg text-primaryText min-h-16 p-2 flex items-center justify-center'>
            <div className='w-4/5 flex justify-between items-center px-2'>
                <Link to='/' className='flex items-center gap-2'>
                    <img className='w-10 h-10' src="/cart.webp" alt="" />
                    <h1 className='text-xl'>Meropasal Inventory</h1>
                </Link>
                {
                    location.pathname === '/addproduct' ? null :
                        <Link to='/addproduct' className='text-md rounded-lg p-2 font-bold cursor-pointer border-2 border-primaryText relative hover:scale-110 duration-200 bg-primaryText text-buttonBg hover:bg-navbarBg hover:text-primaryText '>
                            Add Product
                        </Link>
                }
            </div>
        </div>
    )
}

export default Navbar