
// import logo from './logo.svg';

import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container,Row,Col,DropdownButton,Dropdown,Form} from "react-bootstrap";
// import ModalSignup from "./Signup"
// import NavBar from "./Navbar"
// import ControlledCarousel from "./Carousel"
// import SearchBar from "./SearchBar"
import MainCard from "../Card"
import AllCards from "../AllCards"
// import {
//   Link
// } from "react-router-dom";
// import Footer from './Footer';
// import {BiLogIn} from "react-icons/bi"





function Memories() {
  const Arr=[0,1,2,3,4,5,6,7,8,9,10];
  return (
    <Container fluid>
    <div  style={{display:"flex"}}>
      <div style={{flex:1,marginLeft:"3%",}}>
        <h1 style={{fontWeight:"bold",fontFamily:"sans-serif"}}>Memories</h1>
      </div>
      <div style={{flex:1,display:"flex",justifyContent:"flex-end"}}>
      <div style={{marginLeft:"5%",marginTop:"1%",paddingLeft:"5%",}}>
      <Dropdown>
    <Dropdown.Toggle  id="dropdown-button-dark-example1" variant="secondary">
      Filter
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark" style={{width:"100%"}}>
      <Container style={{padding:"2%",width:"100%"}}>
      <Row xs={2} s={3} md={3} l={3} className="g-8">
      {
        Arr.map(()=>{
          return(
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          )
        }
        
        )
      }
      </Row>
    
    </Container>
    </Dropdown.Menu>
  </Dropdown>
  </div>
        <div style={{marginLeft:"4%",marginTop:"1%",paddingLeft:"2%"}}>

        <Form.Select aria-label="Default select example">
  <option value="1">Sort by Price(Low to High)</option>
  <option value="2">Sort by Price(High to Low)</option>
  <option value="3">Sort by Popularity</option>
</Form.Select>
        </div>
        
    </div>
    </div>
    <hr style={{color:"black"}} />
    <div>
    <Row xs={2} s={3} md={4} l={5} className="g-4" style={{marginTop:"5%",marginLeft:"1%"}}>
      {
        Arr.map(()=>{
          return(
          <MainCard src="https://www.memory4less.com/images/products/Img0922/AB322-60001-lg.jpg" title="AB322-60001 HP 4GB PC133 133MHz " price="$313.78"/>)
        }
        
        )
      }
      </Row>
    </div>
    </Container>
  );
}

export default Memories;
