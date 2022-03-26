import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


// Child Component of Magic Shop
const Product = (props) => {
    // Destructuring
    const {price,image,phone_name}=props.phone;
    
    return (
        <div className='phone'>
            <img src={image} alt="" />
            <h2>{phone_name}</h2>
            <h2>${price}</h2>

            <button onClick={()=> props.handler(props.phone)} className='btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;