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





function AllCards() {
  const Arr=[0,1,2,3,4,5];

  return (
    <>
    <Container style={{marginTop:"15%"}} >
    <Row xs={1} s={2} m={5} l={5} className="g-4">
      {
        Arr.map(()=>{
          return(
          <MainCard src="https://www.memory4less.com/images/products/img0922a/641222-001-lg.jpg" title="AB322-60001" price="$313.78"/>)
        }
        
        )
      }
      </Row>
</Container>

    </>
  );
}

export default AllCards;
