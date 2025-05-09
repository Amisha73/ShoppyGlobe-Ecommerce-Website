// src/components/ProductList.js

import React from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { Spinner } from "react-bootstrap";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading)
    return (
      <Spinner animation="border" role="status" className="d-flex justify-content-center align-items-center">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <p>Error fetching products.</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
