import React, { useState } from 'react';

// Define the structure of the Product object
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ProductDisplay: React.FC = () => {
    // Initialize the state with a product object
    const [product] = useState<Product>({
        id: 1,
        name: 'cocacola',
        price: 18000,
        quantity: 15,
    });

    return (
        <div>
            <p>Tên: {product.name}</p>
            <p>Giá: {product.price}</p>
            <p>Số lượng: {product.quantity}</p>
        </div>
    );
}

export default ProductDisplay;
