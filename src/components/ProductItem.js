// src/components/ProductItem.js
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discountedPrice = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  //    const handleAddToCart = () => {
  //    try {
  //      dispatch(addToCart({ ...product, quantity: 1 }));
  //    } catch (error) {
  //      console.error("Failed to add to cart:", error);
  //    }
  //  };
  const showDetails = () => {
    // console.log(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="card mb-4 d-flex shadow hover-overlay "
      onClick={showDetails}
      role="button"
    >
      <img
        src={product.images[0]}
        className="card-img-top w-50 mx-auto "
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title overlay-content">{product.title}</h5>
        <p className="card-text small">{product.description}</p>
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
        {/* <Button variant="dark" onClick={handleAddToCart}>
          Add to Cart
        </Button> */}
      </div>
    </div>
  );
};

export default ProductItem;
