import React from 'react'

const Button = ({ btnName, deleteBtn }) => {
    return (
        <div className={`border-2 text-primaryText rounded-lg p-2 text-xl cursor-pointer duration-200 hover:scale-110 hover:bg-primaryText ${deleteBtn ? 'border-red-600 bg-red-600 hover:text-red-600' :'border-buttonBg bg-buttonBg hover:text-buttonBg'} `}>
            {btnName}
        </div>
    )
}

export default Button