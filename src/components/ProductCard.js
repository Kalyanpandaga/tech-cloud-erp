import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="card product-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <p className="card-text rating">Rating: {rating}⭐</p>
        <div class="button-container">
            <button className="add-to-cart-button btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
