import '../App.css';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button,Row,Col,Form,Container} from "react-bootstrap";
import ModalSignup from "../Components/Signup"
import NavBar from "../Components/Navbar"
import ControlledCarousel from "../Components/Carousel"
import SearchBar from "../Components/SearchBar"
import MainCard from "../Components/Card"
import AllCards from "../Components/AllCards"
import {
  Link,useHistory
} from "react-router-dom";
import Footer from '../Components/Footer';
import {BiLogIn} from "react-icons/bi"
import {motion,useAnimation} from "framer-motion"
import InView, { useInView} from "react-intersection-observer"
import memory from "../Images/memory.jfif"







function Categories(props) {
  const [refFeatured,inViewFeatured] = useInView({threshold:0.7})
  const [refLatest,inViewLatest] = useInView({threshold:0.7})
  const animationFeatured = useAnimation()
  const animationLatest = useAnimation()


  useEffect(()=>{
    if(inViewFeatured){
      animationFeatured.start({
        x:0,
        transition:{
          type:"spring",duration:1 , bounce:0.5
        }
      
       
      })
    }

    if(inViewLatest){
      animationLatest.start({
        x:0,
        transition:{
          type:"spring",duration:1 , bounce:0.5
        }
      
       
      })
    }
   
  })

  return (
    <Container className="Categories">
        <Row>
        <Col sm={3}>
            <img src={memory} />
        </Col>

        </Row>
    </Container>
  );
}

export default Categories;
