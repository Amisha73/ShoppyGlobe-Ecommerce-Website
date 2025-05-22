// src/components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductItem from './ProductItem'; 
import useFetchProducts from '../hooks/useFetchProducts'; 

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const { products } = useFetchProducts();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredProducts);
    }
  }, [query]);

  return (
    <div className="container p-4">
      <h2>Search Results for: "{query}"</h2>
      <div className="row mt-4">
        {results.length > 0 ? (
          results.map(product => (
            <div className="col-md-4" key={product.id}>
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
