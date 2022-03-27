import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'


// ------Magic Shop-------
const Shop = () => {
    const [product,setProduct]=useState([]);
    const [cart, setCart]= useState([]);
    const [randomValue, setRandomValue]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

//-------Event Handler------
    const handler=(produ)=>{
        const newCart = [...cart, produ.phone_name]
        setCart(newCart);
        if(newCart.length > 4){
            newCart.pop();
        }
    };

// -----remove handler-----
const removeHandler=()=>{
    let removeCart =cart;
    removeCart = [];
    setCart(removeCart);
};

// ------random selection-------
const randomSelect=()=>{
    let randomValue = cart[Math.floor(Math.random()*cart.length)]
    setRandomValue(randomValue);
}
    
// Section of Magic Shop
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
                <h1 className='magic-cart'>Selected Items</h1>
                <h2 >{cart}  </h2>
                <button onClick={randomSelect}  className='btn-2'>Choose one for me</button>
                <h2>{randomValue}</h2>
                <button onClick={removeHandler} className='btn-2'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;