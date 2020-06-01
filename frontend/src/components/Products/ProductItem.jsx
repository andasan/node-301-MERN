import React from 'react';
import './ProductItem.css';

const ProductItem = (props) => {
    return (
        <li className="product-item">
            <h2>{props.title}</h2>
            <p>Price: {props.price}</p>
        </li>
    );
};

export default ProductItem;