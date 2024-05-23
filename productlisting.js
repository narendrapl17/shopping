// ProductListingPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductListingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the server
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-listing">
            <h1>Browse Products</h1>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;
