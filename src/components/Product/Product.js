import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    // uporer line a props er modhe direct (product, handleAddToCart) likhleobutton a props. use kora lagbena
    // const {product, handleAddToCart} = props; amon vabe distructure korle button a props. use kora lagbena
    const {name,img,seller,ratings,price} = props.product;
    // console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} starts</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon = {faShoppingCart }></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;