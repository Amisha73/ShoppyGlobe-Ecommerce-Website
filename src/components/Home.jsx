import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import ProductList from './ProductList.js';

const Home = () => {
  return (
    <div className='p-5 m-4'>
      <Container fluid className="p-3 d-flex flex-column justify-content-center align-items-center bg-light">
        <Row className="align-items-center">
          <Col xs={12} md={6} className='mb-4'>
            <img 
              src="https://plus.unsplash.com/premium_photo-1676739688583-99db8dedd603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8" 
              alt="Welcome to ShoppyGlobe" 
              className="img-fluid" 
            />
          </Col>
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold mb-4">Welcome to ShoppyGlobe!</h1>
            <p className="lead text-muted">
              Your one-stop shop for all your favorite products. Explore our wide range of items and enjoy a seamless shopping experience.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <ProductList /> */}
    </div>
  );
};

export default Home;
