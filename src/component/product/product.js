import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock,key } = props.Product
    return (
        <div className='Product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3 className='product-name'><Link to={"/Product/"+key}>{name}</Link></h3>
                <p>{seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock -Oder soon</small></p>
                { props.Showaddtocart && <button className="Button"
                    onClick={()=>props.handlaeAddProduct(props.Product)}
                    ><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
                }
            </div>

        </div>
    );
};

export default Product;