import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// If you're not using React-Bootstrap, you can implement a custom modal or another library.

function LoginModal({ show, onClose }) {
  if (!show) return null; // hide if not 'show'

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Login (dummy)
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
