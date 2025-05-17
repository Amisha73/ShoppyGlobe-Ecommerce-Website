// src/components/CartItem.js

import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = () => {
  return (
    <tr>
      <td>title</td>
      <td>$price</td>
      <td>
        <input
          type="number"
          min="1"
          style={{ width: '60px' }}
        />
      </td>
      <td>$price*quantity</td>
      <td>
        <Button variant="danger">Remove</Button>
      </td>
    </tr>
  );
};

export default CartItem;
