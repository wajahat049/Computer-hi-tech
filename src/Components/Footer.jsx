// import logo from './logo.svg';
import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Container,Row,Col} from "react-bootstrap";
import ModalSignup from "./Signup"
import NavBar from "./Navbar"
import ControlledCarousel from "./Carousel"
import SearchBar from "./SearchBar"
import MainCard from "./Card"
import {
  Link
} from "react-router-dom";
import { FaFacebook,FaInstagram,FaTwitter,FaCopyright } from 'react-icons/fa';
import {SiGmail } from 'react-icons/si';





function Footer() {
  return (
    <div style={{backgroundColor:"black",borderTop:"2px solid black",marginTop:"10%",paddingBottom:"2%"}} >
      
    <Container style={{marginTop:"5%",color:"white"}} >
  <Row>
   <Col>
        <h5  >INFORMATION</h5>
        <ul style={{color:"black",listStyle:"none",padding:0}}>
          <li style={{marginBottom:"5%"}}>
        <Link style={{color:"white"}} >Login</Link> </li>
        <li style={{marginBottom:"5%"}}>
       <Link style={{color:"white"}}> Register </Link> </li>
       <li style={{marginBottom:"5%"}}>
       <Link style={{color:"white"}}> My Account </Link> </li>
        </ul>
   
   </Col>
   <Col>
        <h5>CUSTOMER SERVICES</h5>
        <ul style={{color:"black",listStyle:"none",padding:0}}>
          <li style={{marginBottom:"5%"}}>
        <Link style={{color:"white"}} >Login</Link> </li>
        <li style={{marginBottom:"5%"}}>
       <Link style={{color:"white"}}> Register </Link> </li>
       <li style={{marginBottom:"5%"}}>
       <Link style={{color:"white"}}> My Account </Link> </li>
        </ul>

   
   </Col>
   <Col>
        <h5>MY ACCOUNT</h5>
        <ul style={{color:"black",listStyle:"none",padding:0}}>
          <li style={{marginBottom:"5%"}}>
        <Link style={{color:"white"}} >Login</Link> </li>
        <li style={{marginBottom:"5%"}}>
       <Link style={{color:"white"}}> Register </Link> </li>
       <li style={{marginBottom:"5%"}}>
       <Link style={{color:"white"}}> My Account </Link> </li>
        </ul>

   
   </Col>
   <Col>
        <h5>STAY CONNECTED</h5>
        <Row className='Footer-icons' style={{marginTop:"10%"}}>
          <Col><FaFacebook size={30}/></Col>
          <Col><FaInstagram size={30}/></Col>
          <Col><FaTwitter size={30}/></Col>
          <Col><SiGmail size={30}/></Col>


        </Row>
   
   </Col>

  </Row>
  <Row style={{marginTop:"2%",textAlign:"center"}} ><Col><FaCopyright size={25}/>   Computer-hi Tech</Col></Row>
</Container>

    </div>
  );
}

export default Footer;
