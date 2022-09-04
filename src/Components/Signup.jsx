import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ModalSignup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // For Error Message
  const [msg, setMsg] = useState("");
  const [variant, setvariant] = useState("");


  // For SnackBar
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // save data
  const save = (data) => {
    console.log("data of signup", data)
    setMsg(data.message)
    setvariant(data.variant)
    setOpen(true)
    setName("")
    setEmail("")
    setPassword("")
  }


  // submit signup
  const Submit = () => {
    console.log(name, email, password)
    if (password == confirmPassword) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      };
      fetch(process.env.REACT_APP_BASE_URL + '/CreateUser', requestOptions)
        .then(response => response.json())
        .then(data => save(data));
    }
    else {
      console.log("confirm password not match")
      setMsg("Password do not match")
      setvariant("warning")
      setOpen(true)
    }
  }



  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>

      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Signup Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={() => Submit()} variant="dark" >
              Signup
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSignup;