import React, { useEffect, useState } from 'react';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    } , [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3> products  all are = {products.length}</h3>
            </div>
            <div className="carts-container">
                <h4>carts area...</h4>
            </div>
        </div>
    );
};

export default Shop;