// src/components/CartItem.js

import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
          style={{ width: '60px' }}
        />
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <Button variant="danger" onClick={() => onRemove(item.id)}>Remove</Button>
      </td>
    </tr>
  );
};

export default CartItem;
