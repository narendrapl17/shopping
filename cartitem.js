// CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <img src={item.product.imageUrl} alt={item.product.name} />
            <div>
                <h2>{item.product.name}</h2>
                <p>${item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;
