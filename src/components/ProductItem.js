// src/components/ProductItem.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discountedPrice = (
    product.price - product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const showDetails = () => {
    // console.log(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card mb-4 d-flex sm:flex-wrap shadow ">
      <img
        src={product.images[0]}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          {discountedPrice === product.price.toFixed(2) ? (
            <span>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </span>
          ) : (
            <>
              <strong> Price: </strong>
              <span className="text-decoration-line-through">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-danger ms-2">
                <strong> ${discountedPrice}</strong>
              </span>
            </>
          )}
        </p>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={showDetails}>
            View Details
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
