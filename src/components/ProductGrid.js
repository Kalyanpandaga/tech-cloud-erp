import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    { image: 'https://via.placeholder.com/150x200', title: 'Rise & Shine', price: 29, rating: 4 },
    { image: 'https://via.placeholder.com/150x200', title: 'Laura Face Wash Loshan', price: 39, rating: 5 },
    { image: 'https://via.placeholder.com/150x200', title: 'Product 3', price: 25, rating: 3 },
    { image: 'https://via.placeholder.com/150x200', title: 'Radiant Left Fondation', price: 45, rating: 5 },
  ];

  return (
    <div className="row">
      {products.map((product, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
