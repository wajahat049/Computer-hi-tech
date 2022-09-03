// import logo from './logo.svg';
import '../App.css';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import ModalSignup from "../Components/Signup"
import NavBar from "../Components/Navbar"
import ControlledCarousel from "../Components/Carousel"
import {useHistory} from "react-router-dom"
import {Container,Row,Col,Form,Button} from "react-bootstrap";
import AllCard from "../Components/AllCards"
// import Card from "./Card"
import MainCard from "../Components/Card"
import OrderInBulk from "../Components/OrderInBulk"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {motion,useAnimation} from "framer-motion"
import ProductCarousel from "../Components/ProductCarousel"
import {useInView,} from "react-intersection-observer"




function Details(props) {
  const [bulkmodalShow, setBulkModalShow] = React.useState(false);
  const imgArr=["https://www.memory4less.com/images/products/img0922m/HYN-D4-R-LO-N-sm.jpg",
"https://www.memory4less.com/images/products/img0922/SNP917VKC-128G-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/HCBB-75W-A-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/AA23080-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/674841-B21-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/975-200005-sm.jpg"]
  useEffect(() => {
      
    window.scrollTo(0, 0)
  }, [])
    let history=useHistory()
    console.log(props.history)
  return (   
  <>
<Container fluid style={{marginLeft:"2%",marginTop:"5%"}} >
    <Row style={{justifyContent:"center"}}>
   
<Col md={3} sm={10} xs={8} style={{border:"2px solid black",borderRadius:"5px"}}>
<motion.div animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0,360, 0],
                  }}>
    <img style={{justifyContent:"center"}} width="100%" height="100%" src={"https://www.memory4less.com/images/products/img0922/BX80677I57640X-lg.jpg"} />
</motion.div>
</Col>

<Col>
    <div style={{float:"left",marginTop:"2%"}}>
      
        <h4 style={{textAlign:"start"}}>BX80677I57640X Intel Core i5-7640X X-series Quad Core 4.00GHz 8.00GT/s DMI 6MB L3 Cache Socket LGA2066 Desktop Processor</h4>
        <hr />
        <h5 style={{textAlign:"start",color:"red"}}>Price:  $ 500</h5>
        <Form.Label style={{float:"left",marginRight:"3%",paddingTop:"1%"}}>Select Quantity</Form.Label>
        <Form.Select style={{width:"fit-content"}} aria-label="Default select example">
        
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</Form.Select>

    </div>
<Button style={{float:"left",marginTop:"3%"}} variant="dark">Add to Cart</Button>

<Button onClick={()=>{setBulkModalShow(true)}}  style={{float:"left",marginTop:"3%",marginLeft:"5%"}} variant="dark">Order in Bulk</Button>
<OrderInBulk
            show={bulkmodalShow}
            onHide={() => setBulkModalShow(false)}
          />
</Col>
</Row>
<Row style={{marginTop:"5%",width:"100%",display:"flex"}}>
    <Col sm={10} md={7} >
      <Row >
    <h2>Technical Specifications</h2>
    </Row >
      <Container>
        <Row className='TechnicalRow' >
            <Col> <b> Manufacturer </b> </Col>
            <Col>Hynix</Col>
        </Row>

        <Row className='TechnicalRow' >
            <Col> <b> Manufacturer Part #	 </b> </Col>
            <Col>HMA84GR7AFR4N-UH</Col>
        </Row>
        <Row className='TechnicalRow' >
            <Col> <b> Memory Type </b> </Col>
            <Col>DDR4 SDRAM</Col>
        </Row>

        <Row className='TechnicalRow'  >
            <Col> <b> Capacity </b> </Col>
            <Col>32GB</Col>
        </Row>

        <Row className='TechnicalRow' style={{borderBottom:"2px solid gray"}} >
            <Col> <b> five </b> </Col>
            <Col>5</Col>
        </Row>
        </Container>
    </Col>
    <Col md={1}></Col>
    <Col className='Contact-Form' sm={2} md={3} >
      <h5 style={{marginBottom:"10%",textDecoration:"underline"}}>Request For Quote!</h5>
          <Form  >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Message">
            <Form.Label>How Soon You Need It?</Form.Label>
            <Form.Select aria-label="Default select example">
      <option value="Today">Today</option>
      <option value="This Week">This Week</option>
      <option value="This Month">This Month</option>
    </Form.Select>
            </Form.Group>




            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
    </Col>
</Row>
<Row style={{marginTop:"5%",width:"60%"}}>
    <h2 >General Information</h2>
    <p>
    The CPU you are ordering, if it is designated as OEM it can be NEW or Refurbished.
    The CPU you are ordering, if it is designated as OEM it can be NEW or Refurbished.
    </p>
</Row>
</Container>
<div style={{marginTop:"5%"}}>
    <h1 style={{textAlign:"center",marginBottom:"5%"}}>Related Products</h1>
 
<ProductCarousel imgArr={imgArr}/>
</div>
</>


  );
}

export default Details;
