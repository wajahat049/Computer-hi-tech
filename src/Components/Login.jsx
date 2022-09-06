import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Form } from "react-bootstrap";

// redux import
import {connect} from "react-redux"
import { changeisuser } from '../Store/action';


// snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ModalSignup(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const save = (data) => {
    setMsg(data.message)
    setvariant(data.variant)
    setOpen(true)
    if (data.message == "Successfully Login") {
      setEmail("")
      setPassword("")
      setTimeout(() => {
        props.changeisuser({ email, password })
      }, [1000])
    }


  }

  const Submit = () => {
    console.log(email, password)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };
    fetch(process.env.REACT_APP_BASE_URL + '/Login', requestOptions)
      .then(response => response.json())
      .then(data => save(data));

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
            Login Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="pass" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button onClick={() => Submit()} variant="dark">
              Login
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


function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisuser: (userInfo) => dispatch(changeisuser(userInfo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalSignup)
