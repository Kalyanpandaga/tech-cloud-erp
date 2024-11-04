// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../store/cartSlice';
import '../styles/Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeItemFromCart(index));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-img" />
            <div>
              <h5>{item.title}</h5>
              <p>Price: ${item.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveFromCart(index)}
              >
                Remove
              </button>
              <button
                className="btn btn-success"
                onClick={() => alert(`Buying ${item.title}`)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
