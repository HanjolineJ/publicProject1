import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Signup({ show, handleClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just close the modal. In a real app, sign-up logic would go here.
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="signupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="signupPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group controlId="signupConfirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Signup;
