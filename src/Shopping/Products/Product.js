import React from 'react';
import './Product.css'
const Product = (props) => {
    const {id,price,image,phone_name}=props.phone;
    console.log(props.phone)
    return (
        <div className='phone'>
            <img src={image} alt="" />
            <h2>{phone_name}</h2>
            <h2>{price}</h2>

        </div>
    );
};

export default Product;