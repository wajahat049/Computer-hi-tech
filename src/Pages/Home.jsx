// import logo from './logo.svg';
import '../App.css';
import React,{useEffect} from 'react';
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






function Home(props) {
  const imgArr=["https://www.memory4less.com/images/products/img0922m/HYN-D4-R-LO-N-sm.jpg",
  "https://www.memory4less.com/images/products/img0922/SNP917VKC-128G-sm.jpg",
  "https://www.memory4less.com/Images/products/img0922a/HCBB-75W-A-sm.jpg",
  "https://www.memory4less.com/Images/products/img0922a/AA23080-sm.jpg",
]

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
              {imgArr.map((e,i) => {
                return (
                  <motion.div 
                    initial={{x:"-200vw"}}
                    animate={animationFeatured}
                  >
                    <MainCard 
                      src={e}
                      title="AB322-60001 HP 4GB PC133 133MHz "
                      price="$313.78"
                    />
                    </motion.div>
                  
                );
              })}
              <Row style={{justifyContent:"end",marginTop:"4%"}}>
                     <Button style={{width:"12%"}} variant="dark" onClick={() => {}}>See more<AiOutlineArrowRight style={{marginLeft:"10%"}}/> </Button>
              </Row>
            </Row>
          </div>
    <div  style={{width:"100%",height:"40px",textAlign:"center",marginTop:"10%"}}>
      <span className="heading"> Latest Products </span>
      
    </div>
    <div className="Latest" ref={refLatest}  style={{textAlign:"-webkit-center"}}  >
            <Row  style={{width:"90% !important"}}
              xs={2}
              s={2}
              md={4}
              l={5}
              className="g-3"
              style={{
                marginTop: "5%",
              }}
            >
              {imgArr.map((e,i) => {
                return (
                  <motion.div 
                  initial={{x:"-200vw"}}
                  animate={animationLatest}
                >
                    <MainCard
                      src={e}
                      title="AB322-60001 HP 4GB PC133 133MHz "
                      price="$313.78"
                    />
                    </motion.div>
                  
                );
              })}
               <Row style={{justifyContent:"end",marginTop:"4%"}}>                     
               <Button style={{width:"12%"}} variant="dark" onClick={() => {}}>See more<AiOutlineArrowRight style={{marginLeft:"10%"}}/> </Button>

              </Row>
            </Row>
          </div>
    

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