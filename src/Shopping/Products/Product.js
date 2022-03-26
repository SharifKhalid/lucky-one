import React from 'react';
import './Product.css'
const Product = (props) => {
    const {price,image,phone_name}=props.phone;
    
    
    return (
        <div className='phone'>
            <img src={image} alt="" />
            <h2>{phone_name}</h2>
            <h2>${price}</h2>
            <button onClick={()=> props.handler(props.phone)} className='btn'><p>Add to Cart</p></button>

        </div>
    );
};

export default Product;