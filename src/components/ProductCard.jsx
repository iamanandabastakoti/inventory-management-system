import React from 'react'

const ProductCard = ({ name, image, category, price }) => {
    return (
        <div className='flex flex-col w-80 min-h-40 overflow-hidden bg-white gap-1'>
            <img className='' src={image} alt="" />
            <div className='flex flex-col justify-between gap-2 mx-2'>
                <div className='flex flex-col'>
                    <h4 className='text-2xl'>{name}hl</h4>
                    <span className='text-lg text-gray-500'>{category}</span>
                </div>
                <span className='text-xl font-bold font-Roboto'>${price}</span>
            </div>
        </div>
    )
}

export default ProductCard