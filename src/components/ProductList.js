import React, { useState } from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories array
  const categories = ["All", "beauty", "fragrances", "furniture", "groceries"];

  // Function to filter products based on selected category
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "All") {
      return true; // Show all products
    }
    return product.category === selectedCategory; // Filter by category
  });

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center fs-4"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        Loading...
      </div>
    );
  if (error) return <p>Error fetching products.</p>;

  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="dark"
            className="mb-3"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 col-sm-6 " key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
