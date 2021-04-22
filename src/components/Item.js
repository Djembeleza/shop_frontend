import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Item = ({ title, price, image, addToCart, id }) => {
    return (
        <div className="md:w-1/4 mx-2 my-4">
            <h3 className='text-lg font-bold text-green-700 text-center p-5'>{title}</h3>
            <img src={image} alt={title} className="rounded-3xl" />
            <p className="text-center text-green-900 mt-2">You clicked the button { } times.</p>
            <p className="text-center my-2 text-green-600">R
<span className="font-bold text-green-700 text-xl pl-1">{price}</span>

            </p>

            <div className="w-full flex flex-row justify-around">
                <button className="border-2 border-green-700 duration-75 ease-linear bg-green-400 text-green-800 px-3 rounded-xl py-2 shadow-lg font-semibold hover:bg-green-900 hover:text-green-100" onClick={() => addToCart(id)}>Click Here <FontAwesomeIcon icon={faShoppingBasket}/> <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    )
}

export default Item;
