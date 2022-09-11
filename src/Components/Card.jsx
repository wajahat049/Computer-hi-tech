// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Card} from "react-bootstrap";
import ModalSignup from "./Signup"
import NavBar from "./Navbar"
import ControlledCarousel from "./Carousel"
import {Link, useHistory} from "react-router-dom";



function MainCard(props) {
  const history = useHistory()

  return (
    <a  onClick={()=>history.push("/details",{title:props.fullTitle,image:props.src,price:props.priceValue})} style={{ textDecoration: 'none',cursor:"pointer" }}>
    <Card className="Product-Card" >
   <div className="insideCard">
    <Card.Img style={{padding:"5%"}}  variant="top" src={props.src} />
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
    <div className='lineCard' >
      </div>
  </Card>
  </a>
  );
}

export default MainCard;
