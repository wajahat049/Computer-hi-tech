// import logo from './logo.svg';
import '../App.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Button,Row,Table,Image,Form,Col} from "react-bootstrap";
import {
  Link
} from "react-router-dom";
import {BiLogIn} from "react-icons/bi"
import {motion,useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import { connect } from "react-redux";
import CartLogo1 from "../Images/search.png" 
import CartLogo2 from "../Images/computer.png" 






function Cart(props) {
  const [ref, inView] = useInView({ threshold: 0.7 })
  const animation = useAnimation()
  const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const imgArr = ["https://www.memory4less.com/images/products/img0922m/HYN-D4-R-LO-N-sm.jpg",
    "https://www.memory4less.com/images/products/img0922/SNP917VKC-128G-sm.jpg",
    "https://www.memory4less.com/Images/products/img0922a/HCBB-75W-A-sm.jpg",
    "https://www.memory4less.com/Images/products/img0922a/AA23080-sm.jpg",
    "https://www.memory4less.com/Images/products/img0922a/674841-B21-sm.jpg",
    "https://www.memory4less.com/Images/products/img0922a/975-200005-sm.jpg"]


  var userInfo = props.userInfo;
  console.log("userInfo", userInfo.email)

  // states for profile API
  const [email, setEmail] = React.useState("");
  const [productImg, setProductImg] = React.useState("");
  const [items, setItems] = React.useState([]);


  function getCart() {
    fetch(process.env.REACT_APP_BASE_URL + '/Cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userInfo.email })
    })
      .then(response => response.json())
      .then(data => {
        console.log("get cart data", data)
        setEmail(data.result[0].email)
        setItems(data.result[0].items)
        setProductImg(data.result[0].productImg)
      }
      );
  }

  // job profile get API
  React.useEffect(() => {
    getCart()
  }, [])

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring", duration: 1.8, bounce: 0.5
        }


      })
    }
  })
  return (
    <div ref={ref} style={{textAlign:"-webkit-center",marginTop:"5%"}}>
      <img height={"100px"} width={"100px"} 
      src={CartLogo1
      // src={CartLogo2
    
    }
      
      />
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
            {
              items.length != 0 ?
                items.map((e) => {
                  return (


                    <tr style={{ textAlign: "center" }}>
                      <td style={{ paddingLeft: "3%" }}>
                        <Row>
                          <Col md={4}>
                            <Image width="55em" height="55em" src={productImg} roundedCircle />
                          </Col>
                          <Col style={{ paddingTop: "2%", textAlign: "start" }} md={8}>
                            <span style={{ marginLeft: "10%" }}>{e.productName}</span>
                          </Col>
                        </Row>
                      </td>
                      <td style={{ color: "red", paddingTop: "1%" }}><strong >{e.productPrice}</strong> </td>
                      <td style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                        <Form.Select defaultValue={e.quantity} aria-label="Select">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Select>
                      </td>
                      <td style={{ color: "red", paddingTop: "1%" }}><strong >{e.totalPrice}</strong> </td>

                    </tr>
                  )
                })
                :
                null
            }
          </tbody>
        </Table>
      </motion.div>


    </div>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, null)(Cart);
