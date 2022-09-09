// import logo from './logo.svg';
import '../App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Button, Navbar, Nav, Container, NavDropdown,Modal,Row,Col } from "react-bootstrap";
import ModalSignup from "./Signup";
import ModalLogin from "./Login";
import { BiLogIn,BiLogOut } from "react-icons/bi";
import { HiOutlineUserAdd,HiOutlineShoppingCart } from "react-icons/hi";
import { Link,useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { changeisuser } from '../Store/action';

import Logo from "../Images/logo2.png";

function NavBar(props) {
  const history  = useHistory()

  const [signmodalShow, setsignModalShow] = React.useState(false);
  const [loginmodalShow, setloginModalShow] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
}

function closeModal() {
    setIsOpen(false);
}


  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="sm"
        style={{ backgroundColor: "#0e0e0f",opacity:0.95 }}
        variant="dark"
      >
        <Container fluid>
          <Navbar.Brand
            href="/"
            style={{ width: "13%"}}
          >
            <img
              src={Logo}
              style={{height:"2.5em",width:"7em"}}
              className="d-inline-block top-align"
              // alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navLinks" href="/category/Memories">Memory</Nav.Link>
              <Nav.Link className="navLinks" href="/category/HardDrives">Hardrive</Nav.Link>
              <Nav.Link className="navLinks" href="/category/SSDs">SSDs</Nav.Link>
              {/* <Nav.Link className="navLinks" href="/details">Graphic Cards</Nav.Link>
              <Nav.Link className="navLinks" href="/details">CPU</Nav.Link>
              <Nav.Link className="navLinks" href="/details">MotherBoards</Nav.Link>
              <Nav.Link className="navLinks" href="/details">Networking</Nav.Link> */}
              <Nav.Link className="navLinks" href="/categories">All Categories</Nav.Link>
              <Nav.Link className="navLinks" href="/contact">Contact us</Nav.Link>
              <Nav.Link className="navLinks" href="/about">About us</Nav.Link>

              


            </Nav>
            {props.userInfo.email!="anonymous@gmail.com"?
<>
            <Button
            style={{ marginRight: "1%" }}
            variant="outline-secondary"
            onClick={() => history.push("/cart")}
          >
            <HiOutlineShoppingCart size={20} />
          </Button>

          <Button
          style={{ marginRight: "1%" }}
          variant="outline-secondary"
          onClick={() => openModal()}
          >
          <BiLogOut size={20} />
          </Button>
          </>
:
<>
            <Button
            style={{ marginRight: "1%" }}
            variant="outline-secondary"
            onClick={() => setsignModalShow(true)}
          >
            <HiOutlineUserAdd size={20} />
          </Button>
          <ModalSignup
            show={signmodalShow}
            onHide={() => setsignModalShow(false)}
          />
          <Button
            variant="outline-secondary"
            onClick={() => setloginModalShow(true)}
          >
            <BiLogIn size={20} />
          </Button>
          </>
            }

          <ModalLogin
            show={loginmodalShow}
            onHide={() => setloginModalShow(false)}
            
          />
        <Modal show={modalIsOpen}
            onHide={() => closeModal()}
            size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
              
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            LogOut
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                            <h5>
                                Are you sure you want to Logout?
                            </h5>
                            <Row style={{ textAlign: "center", marginTop: "10%" }}>
                                <Col>
                                    <button onClick={() => {
                                        props.changeisuser({email:"anonymous@gmail.com"})
                                        window.localStorage.clear()
                                        history.push("/")
                                        setTimeout(()=>{
                                            window.location.reload("/")
                                        },2000)
                                    }
                                    } style={{ borderRadius: "5px" }} className="IconButton"> YES </button>
                                </Col>
                                <Col>
                                    <button onClick={() => closeModal()} style={{ borderRadius: "5px" }} className="IconButton"> NO </button>

                                </Col>

                            </Row>
                            </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={()=>closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
          </Navbar.Collapse>

          
        </Container>
      </Navbar>
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


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
