import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed w-full bg-navbarBg text-primaryText min-h-16 p-2 flex items-center justify-center'>
            <div className='w-4/5 flex justify-between items-center px-2'>
                <div className='flex items-center gap-2'>
                    <img className='w-10 h-10' src="/cart.webp" alt="" />
                    <h1 className='text-xl'>Meropasal Inventory</h1>
                </div>
                <div className='text-md rounded-lg p-2 font-bold cursor-pointer relative hover:scale-110 duration-300 bg-primaryText text-buttonBg'>
                    Add Item
                </div>
            </div>
        </div>
    )
}

export default Navbar