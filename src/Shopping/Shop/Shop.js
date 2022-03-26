import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'




const Shop = () => {
    const [product,setProduct]=useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    
    
    return (
        <div className='super-shopping'>
            <div className='shop-window'>
               {
                   product.map(products=> <Product 
                    key={products.id}
                    phone={products}
                    ></Product>)
                   
               }
               
            </div>

            <div className='shop-cart'>
                <h1>shop cart</h1>
            </div>
        </div>
    );
};

export default Shop;