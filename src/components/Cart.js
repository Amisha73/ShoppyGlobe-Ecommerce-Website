// src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCart, updateQuantity } from '../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity(id, quantity));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mb-5 py-5">
      <h1>Your Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div className="d-flex flex-column gap-3">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={() => handleRemove(item.id)}
                onQuantityChange={(quantity) =>
                  handleQuantityChange(item.id, quantity)
                }
              />
            ))}
          </div>
        )}
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        {cartItems.length > 0 && (
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-primary"
              onClick={() => window.location.href = '/checkout'}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
