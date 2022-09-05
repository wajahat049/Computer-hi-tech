import '../App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Row, Col, Form } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion"
import InView, { useInView } from "react-intersection-observer"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from '../Components/ProductCarousel';
import background from "../Images/contact_bg2.png";

import contactcover from "../Images/contactcover.jpg";
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import twitter from 'react-useanimations/lib/twitter'
import instagram from 'react-useanimations/lib/instagram'
import linkedin from 'react-useanimations/lib/linkedin'








function Contact(props) {
  const [refFeatured, inViewFeatured] = useInView({ threshold: 0.7 })
  const [refLatest, inViewLatest] = useInView({ threshold: 0.7 })
  const animationFeatured = useAnimation()
  const animationLatest = useAnimation()

  const [filled, setFilled] = useState(false)

  // Contact API
  const SubmitContactForm = (event) => {
    // event.preventDefault()
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    console.log(name, email, message)
    if (name != "" && email != "" && message != "") {
    console.log("fetch", name, email, message)
      fetch(process.env.REACT_APP_BASE_URL + '/ContactForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
        .then(response => response.json())
        .then(data => console.log(data)
        ).then(
          setFilled(true)

        ).then(document.getElementById("name").value = "",
          document.getElementById("email").value = "",
          document.getElementById("message").value = ""
        )

    }
  }


  useEffect(() => {
    if (inViewFeatured) {
      animationFeatured.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.5
        }


      })
    }

    if (inViewLatest) {
      animationLatest.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.5
        }


      })
    }

  })

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      marginBottom: '-150px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: "0.005% 0% 1% 0%",
    }}>

      <Row className='contact-heading heading'>GET IN TOUCH</Row>
      <Row className='contact-subheading'> <p> Phone No. : <span style={{ color: 'gray' }}>03234567839</span> </p></Row>
      <Row className='contact-subheading'> <p> Email : <span style={{ color: 'gray' }}> ComputerHiTech@gmail.com </span> </p> </Row>
      <Row className='contact-subheading'> <p> Address : <span style={{ color: 'gray' }}> Saddar Naz Plaza A/121 </span> </p> </Row>


      <Row style={{ marginTop: "5%", width: "97%", justifyContent: "space-between" }}>
        <Col className='Contact-Content' md={7} sm={12} >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem, quisquam atque reprehenderit omnis id voluptatem ab?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem, quisquam atque reprehenderit omnis id voluptatem ab?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem, quisquam atque reprehenderit omnis id voluptatem ab?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus quae nihil voluptate voluptatibus hic impedit neque facere saepe ducimus distinctio harum, autem, quisquam atque reprehenderit omnis id voluptatem ab?
          </p>
          <Row className='Contact-Socialmedia'>
            <h2 style={{ marginBottom: "5%" }}>Social Media</h2>
            <Col>
              <UseAnimations strokeColor='white' speed={2} animation={facebook} size={56} />
            </Col>
            <Col>
              <UseAnimations strokeColor='white' speed={2} animation={instagram} size={56} />
            </Col>
            <Col>
              <UseAnimations strokeColor='white' speed={2} animation={twitter} size={56} />
            </Col>
            <Col>
              <UseAnimations strokeColor='white' speed={2} animation={linkedin} size={56} />
            </Col>

          </Row>

        </Col>
        <Col className='Contact-Form' md={4} sm={12}>
          <Form style={{ color: "white" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control id='name' type="text" placeholder="Enter full name" required  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control id='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Message">
              <Form.Label >Your Message</Form.Label>
              <Form.Control id='message' placeholder='Your valuable Response' as="textarea" rows={4} required />
            </Form.Group>
          </Form>
          <Button variant="dark" onClick={(e) => SubmitContactForm(e)}>
              {
                filled ? <img width={35} height={30} src="https://www.freeiconspng.com/uploads/accept-tick-icon-12.png" />
                  : "Submit"
              }
            </Button>
        </Col>
      </Row>




    </div>
  );
}

export default Contact;
