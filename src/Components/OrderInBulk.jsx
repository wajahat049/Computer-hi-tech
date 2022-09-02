import React from 'react';
import ReactDOM from 'react-dom';
import { Modal,Button,Form } from "react-bootstrap";

function ModalSignup(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order In Bulk
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicQuantity">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicTime">
  <Form.Label style={{float:"left",marginRight:"3%",paddingTop:"1%"}}>How soon you need it</Form.Label>
        <Form.Select style={{width:"100%"}} aria-label="Default select example">
        
  <option value="In a week">In a week</option>
  <option value="In two weeks">In two weeks</option>
  <option value="In a month">In a month</option>
</Form.Select>

</Form.Group>
 
  <Button variant="dark" type="submit">
    Submit
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalSignup;