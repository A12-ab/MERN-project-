import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png';

export const CartItems = () => {
    const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

    // Debugging logs
    console.log('all_product:', all_product);
    console.log('cartItem:', cartItem);

    if (!all_product || all_product.length === 0) {
        return <p>No products available</p>;
    }

    if (!cartItem) {
        return <p>No items in the cart</p>;
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem.hasOwnProperty(e.id) && cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove item" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};
