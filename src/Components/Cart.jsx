// import logo from './logo.svg';
import '../App.css';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button,Row,Table,Image,Form,Col} from "react-bootstrap";
import ModalSignup from "./Signup"
import NavBar from "./Navbar"
import ControlledCarousel from "./Carousel"
import SearchBar from "./SearchBar"
import MainCard from "./Card"
import AllCards from "./AllCards"
import {
  Link
} from "react-router-dom";
import Footer from './Footer';
import {BiLogIn} from "react-icons/bi"
import {motion,useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"




function Cart() {
  const [ref,inView] = useInView({threshold:0.7})
  const animation = useAnimation()
  const Arr=[1,2,3,4,5,6,7,8,9,10,11,12]
  const imgArr=["https://www.memory4less.com/images/products/img0922m/HYN-D4-R-LO-N-sm.jpg",
"https://www.memory4less.com/images/products/img0922/SNP917VKC-128G-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/HCBB-75W-A-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/AA23080-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/674841-B21-sm.jpg",
"https://www.memory4less.com/Images/products/img0922a/975-200005-sm.jpg"]



useEffect(()=>{
  if(inView){
    animation.start({
      x:0,
      transition:{
        type:"spring",duration:1.8 , bounce:0.5
      }
    
     
    })
  }
})
  return (
    <div ref={ref} style={{textAlign:"-webkit-center",marginTop:"5%"}}>
      <h1 style={{marginBottom:"5%",fontWeight:"bold"}}>Your Cart</h1>
      <motion.div 
                  initial={{x:"-200vw"}}
                  animate={animation}
                >
   <Table striped bordered hover responsive style={{width:"95%",border:"2px solid gray"}}>
  <thead>
    <tr style={{textAlign:"center",fontSize:"large"}}>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>

    </tr>
  </thead>
  <tbody>
    <tr style={{textAlign:"center"}}>
      <td  style={{paddingLeft:"3%"}}>
        <Row>
          <Col md={4}>
        <Image width="55em" height="55em" src="https://www.memory4less.com/images/products/img0922m/HYN-D4-R-LO-N-sm.jpg" roundedCircle />
        </Col>
        <Col style={{paddingTop:"2%",textAlign:"start"}} md={8}>
        <span style={{marginLeft:"10%"}}>Item name</span>
        </Col>
        </Row>
     </td>
      <td style={{color:"red",paddingTop:"1%"}}><strong >$200</strong> </td>
      <td style={{paddingLeft:"2%",paddingRight:"2%"}}>
      <Form.Select aria-label="Select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
      </td>
      <td style={{color:"red",paddingTop:"1%"}}><strong >$200</strong> </td>

    </tr>
  </tbody>
</Table>
</motion.div>
    

    </div>
  );
}

export default Cart;
