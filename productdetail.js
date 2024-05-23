// ProductDetailPage.js
import React from 'react';

const ProductDetailPage = ({ product }) => {
    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetailPage;
