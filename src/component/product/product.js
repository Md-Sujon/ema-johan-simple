import React from 'react';
import './product.css'

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = props.Product
    return (
        <div className='Product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <p>{seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock -Oder soon</small></p>
            </div>

        </div>
    );
};

export default Product;