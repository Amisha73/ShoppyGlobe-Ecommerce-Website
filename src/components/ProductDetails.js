import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching product details.</p>;

  const discountedPrice = (
    product.price -
    product.price * (product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="mx-auto p-5 w-75">
      <>
        <Card.Body>
          <h3 className="p-3 text-center itallic ">{product.title}</h3>
          <div className="d-flex justify-content-around align-items-center gap-5">
            <div>
              <img
                src={product.images[0]}
                className="img-fluid mb-3"
                width="600px"
                height="600px"
                alt={product.title}
              />
            </div>
            <div className="d-flex flex-column  ">
              <p className="">
                <strong>Description:</strong> {product.description}
              </p>
              {product.brand ? (
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>
              ) : null}
              <p>
                <strong>Rating:</strong> {product.rating}⭐
              </p>
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
              <p>
                <strong>Availablility:</strong> {product.availabilityStatus}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <p>
                <strong>Shipping Information:</strong>{" "}
                {product.shippingInformation}
              </p>
              <p>
                <strong>Refund Policy:</strong> {product.returnPolicy}
              </p>
            </div>
          </div>
        </Card.Body>
      </>

      <h5>𝑹𝒆𝒗𝒊𝒆𝒘𝒔 :</h5>
      <div className="d-flex flex-column gap-3 ">
        {product.reviews.map((review, index) => (
          <div key={index} className="card p-3 shadow">
            <div className="card-body d-flex justify-content-between">
              <div>
                <h6 className="card-title">{review.reviewerName}</h6>
                <p className="card-text">{review.comment}</p>
              </div>
              <div>
                <p className="card-text">
                  <span className="badge bg-success p-2">
                    {review.rating} ⭐
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
