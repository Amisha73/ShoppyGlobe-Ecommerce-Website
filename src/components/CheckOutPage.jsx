import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CheckOutPage = () => {
  const cartItems = useSelector((state) => state.items);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingPrice = itemsPrice > 0 ? 10 : 0;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <Container className="py-5 mb-5">
      <h2>Checkout</h2>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>Shipping Address</Card.Header>
            <Card.Body>
              <Form onSubmit={handlePlaceOrder}>
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    name="fullName"
                    value={shippingInfo.fullName}
                    onChange={handleShippingChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="postalCode">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter postal code"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleShippingChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    required
                  />
                </Form.Group>

                <Card.Header>Payment Method</Card.Header>
                <Form.Group className="mb-3" controlId="paymentMethod">
                  <Form.Check
                    type="radio"
                    label="PayPal"
                    name="paymentMethod"
                    value="PayPal"
                    checked={paymentMethod === 'PayPal'}
                    onChange={handlePaymentChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Credit Card"
                    name="paymentMethod"
                    value="Credit Card"
                    checked={paymentMethod === 'Credit Card'}
                    onChange={handlePaymentChange}
                  />
                </Form.Group>

                <Button variant="dark" type="submit">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header>Order Summary</Card.Header>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  {item.title} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </ListGroup.Item>
              ))}
              <ListGroup.Item>
                <strong>Items:</strong> ${itemsPrice.toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Shipping:</strong> ${shippingPrice.toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Total:</strong> ${totalPrice.toFixed(2)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOutPage;
