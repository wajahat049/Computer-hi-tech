import '../App.css';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button,Row,Col,Form,Container} from "react-bootstrap";
import ModalSignup from "../Components/Signup"
import NavBar from "../Components/Navbar"
import ControlledCarousel from "../Components/Carousel"
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
import graphiccard from "../Images/graphiccard.jfif"
import harddrive from "../Images/harddrive.jfif"
import motherboard from "../Images/motherboard.jfif"
import network from "../Images/network.jfif"
import ssd from "../Images/ssd.jfif"
import powersupply from "../Images/powersupply.jfif"
import cpu from "../Images/cpu.jfif"











function Categories(props) {
  const history = useHistory()
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
    <div  style={{width:"100%",height:"40px",textAlign:"center",marginTop:"2%",marginBottom:"10%"}}>
     <span className="heading"> Categories </span>
     </div>
        <Row style={{marginTop:"5%"}}>
        <Col onClick={()=>history.push("/category/Memories")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>Memory</h2>
            <img height={"180px"} width={"180px"} src={memory} />
        <div className='line' >
        </div>
        </Col>
        <Col onClick={()=>history.push("/category/CPUs")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>CPU</h2>
            <img height={"180px"} width={"180px"} src={cpu} />
        <div className='line' >
        </div>
        </Col>
        <Col onClick={()=>history.push("/category/SSDs")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>SSD</h2>
            <img height={"180px"} width={"180px"} src={ssd} />
        <div className='line' >
        </div>
        </Col>
        <Col onClick={()=>history.push("/category/PowerSupplies")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>PowerSupply</h2>
            <img height={"180px"} width={"180px"} src={powersupply} />
        <div className='line' >
        </div>
        </Col>
        </Row>

        <Row style={{marginTop:"5%"}}>
        <Col onClick={()=>history.push("/category/MotherBoards")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>MotherBoard</h2>
            <img height={"180px"} width={"180px"} src={motherboard} />
        <div className='line' >
        </div>
        </Col>
        <Col onClick={()=>history.push("/category/GraphicCards")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>Graphic Card</h2>
            <img height={"180px"} width={"180px"} src={graphiccard} />
        <div className='line' >
        </div>
        </Col>
        <Col onClick={()=>history.push("/category/HardDrives")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>Hard Drive</h2>
            <img height={"180px"} width={"180px"} src={harddrive} />
        <div className='line' >
        </div>
        </Col>
        <Col onClick={()=>history.push("/category/Networks")} className="Categories_Card"  sm={3}>
        <h2 style={{textAlign:"center",marginTop:"2%"}}>Network</h2>
            <img height={"180px"} width={"180px"} src={network} />
        <div className='line' >
        </div>
        </Col>
        </Row>
    </Container>
  
  );
}

export default Categories;
