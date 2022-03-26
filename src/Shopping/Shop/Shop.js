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

    const handler=(produ)=>{
        console.log(produ);
    };
    
    return (
        <div className='super-shopping'>
            <div className='shop-window'>
               {
                   product.map(products=> <Product 
                    key={products.id}
                    phone={products}
                    handler={handler}
                    ></Product>)   
               }
               
            </div>

            <div className='shop-cart'>
                <h1>Magic Cart</h1>
            </div>
        </div>
    );
};

export default Shop;