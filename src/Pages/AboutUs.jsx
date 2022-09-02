import '../App.css';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button,Row,Card,Col} from "react-bootstrap";
import ModalSignup from "../Components/Signup"
import NavBar from "../Components/Navbar"
import ControlledCarousel from "../Components/Carousel"
import SearchBar from "../Components/SearchBar"
import {
  Link,useHistory
} from "react-router-dom";
import Footer from '../Components/Footer';
import {BiLogIn} from "react-icons/bi"
import {motion,useAnimation} from "framer-motion"
import InView, { useInView} from "react-intersection-observer"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from '../Components/ProductCarousel';
import about_cover from "../Images/about_cover.jpg"
import { useState } from 'react';






function About(props) {
  const [refFeatured,inViewFeatured] = useInView({threshold:0.7})
  const animationFeatured = useAnimation()
  const [coverSize,setcoverSize] = useState(500)


  useEffect(()=>{
    // if(window.innerWidth)
    if(window.innerWidth<400){
      setcoverSize(300)
    }
    if(inViewFeatured){
      animationFeatured.start({
        x:0,
        transition:{
          type:"spring",duration:1 , bounce:0.5
        }
      
       
      })
    }

   
  },[refFeatured])

  return (
    <div className="About-us">
              <img height={coverSize} width="100%" src={about_cover}/>
              <div className='About-cards'>
                
                <Row ref={refFeatured} lg={3} sm={2} md={3} >
                <motion.div 
                    initial={{x:"-200vw"}}
                    animate={animationFeatured}
                  >
                <Col>
              <Card>
  <Card.Header as="h5">Who we are?</Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      With supporting text below as a natural lead-in to additional content.

    </Card.Text>
  </Card.Body>
</Card>
</Col>
</motion.div>
<Col>
<Card>
  <Card.Header as="h5">What we do?</Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      With supporting text below as a natural lead-in to additional content.

    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col >
<Card>
  <Card.Header as="h5">What we sell?</Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      With supporting text below as a natural lead-in to additional content.

    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Header as="h5">Why us?</Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      With supporting text below as a natural lead-in to additional content.

    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col>
<Card>
  <Card.Header as="h5">How we manage?</Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      With supporting text below as a natural lead-in to additional content.

    </Card.Text>
  </Card.Body>
</Card>
</Col>


<Col>
<Card>
  <Card.Header as="h5">What we provide?</Card.Header>
  <Card.Body>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      With supporting text below as a natural lead-in to additional content.

    </Card.Text>
  </Card.Body>
</Card>
</Col>

</Row>
              </div>

              


    </div>
  );
}

export default About;
