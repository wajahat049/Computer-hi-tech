// import logo from './logo.svg';
import '../App.css';
import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import {Button,Row} from "react-bootstrap";
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
import {AiOutlineArrowRight} from "react-icons/ai"
import {motion,useAnimation} from "framer-motion"
import InView, { useInView} from "react-intersection-observer"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from '../Components/ProductCarousel';
// import Chat from '../Components/Chat';

import ScrollAnimation from "react-animate-on-scroll";
import "./animate.css"





function Home(props) {
  const history = useHistory()
  const imgArr=["https://www.memory4less.com/images/products/img0922m/HYN-D4-R-LO-N-sm.jpg",
  "https://www.memory4less.com/images/products/img0922/SNP917VKC-128G-sm.jpg",
  "https://www.memory4less.com/Images/products/img0922a/HCBB-75W-A-sm.jpg",
  "https://www.memory4less.com/Images/products/img0922a/AA23080-sm.jpg",
]

  const [refFeatured,inViewFeatured] = useInView({threshold:0.7})
  const [refLatest,inViewLatest] = useInView({threshold:0.7})
  const animationFeatured = useAnimation()
  const animationLatest = useAnimation()
  const [productsFeature,setProductsFeature] = useState([])
  const [productsLatest,setProductsLatest] = useState([])


  useEffect(()=>{
    //FEATURE
    fetch(process.env.REACT_APP_BASE_URL + '/ProductsAcctoCategory', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category:"GraphicCards"})
  })
    .then(response => response.json())
    .then(grahpiccarddata => {
      console.log("SEARCH",grahpiccarddata.result)

      fetch(process.env.REACT_APP_BASE_URL + '/ProductsAcctoCategory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category:"Memories"})
      })
        .then(response => response.json())
        .then(memorydata => {
          console.log("SEARCH",memorydata.result)
    
          
          setProductsFeature([...grahpiccarddata.result.slice(0,4),...memorydata.result.slice(0,4)])
      });
      
  });

  //LATEST
  fetch(process.env.REACT_APP_BASE_URL + '/ProductsAcctoCategory', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ category:"HardDrives"})
  })
    .then(response => response.json())
    .then(harddrivedata => {
      console.log("SEARCH",harddrivedata.result)

      fetch(process.env.REACT_APP_BASE_URL + '/ProductsAcctoCategory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category:"MotherBoards"})
      })
        .then(response => response.json())
        .then(motherboarddata => {
          console.log("SEARCH",motherboarddata.result)
    
          
          setProductsLatest([...harddrivedata.result.slice(0,4),...motherboarddata.result.slice(0,4)])
      });
      
  });

},[])

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
    <>
    {/* <NavBar/> */}
    {/* // <>
        // <Button variant="primary" onClick={() => setModalShow(true)}>
        //   Launch vertically centered modal
        // </Button>
  
        // <ModalSignup
        //   show={modalShow}
        //   onHide={() => setModalShow(false)}
        // />
      // </> */}
    {/* <SearchBar/> */}
    <Row  >
      <img  className='HomeImg'
      src={"https://media2.giphy.com/media/3oKIPmHmREIV18Xtbq/giphy.gif"} 
      // src={" https://media2.giphy.com/media/j0qclsfQMGBhaVvYGT/200.gif"}
      height="500px"/>
      <div className='HomeBanner'>
        <h3 style={{color:"white"}}>All Computer Parts Available at Reasonable Price</h3>
        <ScrollAnimation
            animateIn="flipInX"
            duration={2}
            delay={1}
          >
      <Button onClick={()=>history.push("/categories")} style={{fontSize:"20px"}} variant="outline-secondary">Buy Our Products</Button>{' '}
    </ScrollAnimation>
      </div>
    </Row>
    <ControlledCarousel/>
    <div style={{width:"100%",height:"40px",textAlign:"center",marginTop:"5%"}}>
      <span className="heading"> Featured Products </span>
      
    </div>
    <div className="Featured" ref={refFeatured} style={{textAlign:"-webkit-center",}}  >
            <Row 
              xs={2}
              s={2}
              md={4}
              l={5}
              className="g-3"
              style={{
                marginTop: "5%",
              }}
            >
              {productsFeature.map((e,i) => {
                return (
                  <motion.div 
                    initial={{x:"-200vw"}}
                    animate={animationFeatured}
                  >
                    <MainCard 
                      src={e.image}
                      title={e.title.slice(0,50)}
                      price={`$${e.price}`}
                    />
                    </motion.div>
                  
                );
              })}
              <Row style={{justifyContent:"end",marginTop:"4%"}}>
                     <Button style={{width:"12%"}} variant="dark" onClick={() => {history.push("/Categories")}}>See more<AiOutlineArrowRight style={{marginLeft:"10%"}}/> </Button>
              </Row>
            </Row>
          </div>
    <div  style={{width:"100%",height:"40px",textAlign:"center",marginTop:"5%"}}>
      <span className="heading"> Latest Products </span>
      
    </div>
    <div className="Latest" ref={refLatest}  style={{textAlign:"-webkit-center"}}  >
            <Row  style={{width:"90% !important", marginTop: "5%"}}
              xs={2}
              s={2}
              md={4}
              l={5}
              className="g-3"
            >
              {productsLatest.map((e,i) => {
                return (
                  <motion.div 
                  initial={{x:"-200vw"}}
                  animate={animationLatest}
                >
                    <MainCard
                      src={e.image}
                      title={e.title.slice(0,50)}
                      price={`$${e.price}`}
                      priceValue={e.price}
                      fullTitle={e.title}
                    />
                    </motion.div>
                  
                );
              })}
               <Row style={{justifyContent:"end",marginTop:"4%"}}>                     
               <Button style={{width:"12%"}} variant="dark" onClick={() => {history.push("/Categories")}}>See more<AiOutlineArrowRight style={{marginLeft:"10%"}}/> </Button>

              </Row>
            </Row>
          </div>
          {/* <div style={{width:"1000px",height:"1000px"}}> */}
          {/* <Chat/> */}
          {/* </div> */}
    </>
  );
}

export default Home;








// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCy8aua-aTqwXuY9_S0T11Vq8wrTmMrcYI",
//   authDomain: "computer-hi-tech.firebaseapp.com",
//   projectId: "computer-hi-tech",
//   storageBucket: "computer-hi-tech.appspot.com",
//   messagingSenderId: "315039438537",
//   appId: "1:315039438537:web:23b2d35a4259c580f59f18",
//   measurementId: "G-3S4KQQJREG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);