// src/components/Cart.js

import React from 'react';
import CartItem from './CartItem'; 

const Cart = () => {

  return (
    <div className="container">
      <h1>Your Cart</h1>
        <div>
          <table className='table'>
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
                <CartItem/>
            </tbody>
          </table>
          <h3>Total Price: $5</h3>
        </div>
    </div>
  );
};

export default Cart;
