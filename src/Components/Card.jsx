// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Card} from "react-bootstrap";
import ModalSignup from "./Signup"
import NavBar from "./Navbar"
import ControlledCarousel from "./Carousel"
import {Link} from "react-router-dom";



function MainCard(props) {
  return (
    <Link to="/details" style={{ textDecoration: 'none' }}>
    <Card >
   <div className="insideCard">
    <Card.Img  variant="top" src={props.src} />
    </div>
    <div style={{height:"35%"}}>
    <Card.Body >
      <Card.Title>{props.title}
</Card.Title>
      <Card.Text>
      <h5 style={{textAlign:"start",color:"red"}}>Price:  {props.price}</h5>
      </Card.Text>
      <Button variant="dark" style={{width:"100%"}} >Add to Cart</Button>
    </Card.Body>
    </div>
  </Card>
  </Link>
  );
}

export default MainCard;
