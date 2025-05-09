// src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions'; 
import CartItem from './CartItem'; 

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items); 
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemove={handleRemove} 
                  onQuantityChange={handleQuantityChange} 
                />
              ))}
            </tbody>
          </table>
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
