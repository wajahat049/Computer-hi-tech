import '../App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Row, Card, Col } from "react-bootstrap";
import ModalSignup from "../Components/Signup"
import NavBar from "../Components/Navbar"
import ControlledCarousel from "../Components/Carousel"
import SearchBar from "../Components/SearchBar"
import {
  Link, useHistory
} from "react-router-dom";
import Footer from '../Components/Footer';
import { BiLogIn } from "react-icons/bi"
import { motion, useAnimation } from "framer-motion"
import InView, { useInView } from "react-intersection-observer"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from '../Components/ProductCarousel';
import aboutSideImg from "../Images/about-sideImg.jpg"
import { useState } from 'react';
import About_background from "../Images/About_bg.jpg";
import who_icon from "../Images/whoIcon.png";
import whatIcon from "../Images/whatDoIcon.png";
import whatSell_Icon from "../Images/whatSell_Icon.jpg";
import why_us_icon from "../Images/why_us_icon.png";
import manage_icon from "../Images/manageIcon.jpg";
import provideIcon from "../Images/provideIcon.png";
import ScrollAnimation from "react-animate-on-scroll";
import "./animate.css"







function About(props) {
  const [refFeatured, inViewFeatured] = useInView({ threshold: 0.7 })
  const [refImage, inViewImage] = useInView({ threshold: 0.7 })

  const animationFeatured = useAnimation()
  const animationImage = useAnimation()
  const [coverSize, setcoverSize] = useState(500)


  useEffect(() => {
    // if(window.innerWidth)
    if (window.innerWidth < 400) {
      setcoverSize(300)
    }


    if (inViewFeatured) {
      animationFeatured.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.5
        }
      })
    }



  }, [refFeatured])

  useEffect(()=>{
    if (inViewImage) {
      animationImage.start({
        x:0,
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }


      })
    }


  
  },[refImage])

  return (
    <div
      style={{
        backgroundImage: `url(${About_background})`,
        marginBottom: '-150px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: "0.005% 0% 1% 0%",
      }}
    >
      <Row className='contact-heading heading'>GET TO KNOW US</Row>
      <Row className='contact-subheading'> <h4 style={{ color: 'gray' }}> Our History and Philosophy </h4> </Row>


      <Row ref={refImage}  style={{ margin: "1%", width: "97%", justifyContent: "space-between" }}>
     
        <Col className='Contact-Content' md={4} sm={12} >
        <ScrollAnimation
            animateIn="zoomInLeft"
            duration={1}
            delay={1.5}
          >
          <p> <span style={{ fontSize: "35px", color: 'gray' }}>L</span> orem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem, quisquam atque reprehenderit omnis id voluptatem ab?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem, quisquam atque reprehenderit omnis id voluptatem ab?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem, quisquam atque reprehenderit omnis id voluptatem ab?
          </p>
          <p> Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem
          </p>
        </ScrollAnimation>
        </Col> 
       
        <Col className='Contact-Form' md={7} sm={12}>
                   <ScrollAnimation
            animateIn="slideInRight"
            duration={1}
            delay={1.5}
          >
          <img width="100%" src={aboutSideImg} alt="" />
          </ScrollAnimation>
        {/* </motion.div> */}
         
        </Col>
        {/* </ScrollAnimation> */}
      </Row>

      <div className='About-cards'>

        <Row ref={refFeatured} lg={3} sm={2} md={3} >
          {/* <motion.div */}
          {/* // initial={{ x: "-200vw" }}
          // animate={animationFeatured} */}
          {/* > */}
            <Col>
            <ScrollAnimation
            animateIn="flipInX"
            duration={1}
            delay={1.5}
          >
              <Card>
                <Card.Header className='cardHeader' as="h5">Who we are? 
                <img width="100px" height="100px" src={who_icon} alt="" />
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    With supporting text below as a natural lead-in to additional content.

                  </Card.Text>
                </Card.Body>
              </Card>
              </ScrollAnimation>
            </Col>
          {/* </motion.div> */}
          <Col>
          <ScrollAnimation
            animateIn="flipInY"
            duration={1}
            delay={1.5}
          >
            <Card>
              <Card.Header className='cardHeader' as="h5">What we do?
              <img width="100px" height="100px" src={whatIcon} alt="" />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                  With supporting text below as a natural lead-in to additional content.

                </Card.Text>
              </Card.Body>
            </Card>
            </ScrollAnimation>
          </Col>

          <Col >
          <ScrollAnimation
            animateIn="flipInX"
            duration={1}
            delay={1.5}
          >
            <Card>
              <Card.Header className='cardHeader' as="h5">What we sell?
              <img width="85px" height="85px" src={whatSell_Icon} alt="" />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                  With supporting text below as a natural lead-in to additional content.

                </Card.Text>
              </Card.Body>
            </Card>
            </ScrollAnimation>
          </Col>

          <Col>
          <ScrollAnimation
            animateIn="flipInX"
            duration={1}
            delay={1.5}
          >
            <Card>
              <Card.Header className='cardHeader' as="h5">Why us?
              <br />
              <img width="80px" height="80px" src={why_us_icon} alt="" />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                  With supporting text below as a natural lead-in to additional content.

                </Card.Text>
              </Card.Body>
            </Card>
            </ScrollAnimation>
          </Col>

          <Col>
          <ScrollAnimation
            animateIn="flipInY"
            duration={1}
            delay={1.5}
          >
            <Card>
              <Card.Header className='cardHeader' as="h5">How we manage? 
              <img width="75px" height="75px" src={manage_icon} alt="" />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                  With supporting text below as a natural lead-in to additional content.

                </Card.Text>
              </Card.Body>
            </Card>
            </ScrollAnimation>
          </Col>


          <Col>
          <ScrollAnimation
            animateIn="flipInX"
            duration={1}
            delay={1.5}
          >
            <Card>
              <Card.Header className='cardHeader' as="h5">What we provide?
              <img width="100px" height="100px" src={provideIcon} alt="" />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                  With supporting text below as a natural lead-in to additional content.

                </Card.Text>
              </Card.Body>
            </Card>
            </ScrollAnimation>
          </Col>

        </Row>
      </div>




    </div>
  );
}

export default About;
