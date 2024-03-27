import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, name, image, category, price }) => {
    return (
        <Link to={'/products/' + id} className='flex flex-col w-80 min-h-40 overflow-hidden object-contain p-2 rounded-lg gap-1 hover:scale-105 duration-300 relative z-40'>
            <img className='' src={image} alt="" />
            <div className='flex flex-col justify-between gap-2 mx-2'>
                <div className='flex flex-col'>
                    <h4 className='text-2xl'>{name}hl</h4>
                    <span className='text-lg text-gray-500'>{category}</span>
                </div>
                <span className='text-xl font-bold font-Roboto'>${price}</span>
            </div>
        </Link>
    )
}

export default ProductCard