// import logo from './logo.svg';
import '../App.css';
import React, { useEffect,useState } from 'react';
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
import StripeCheckout from "react-stripe-checkout";
import CreditCard from "../Images/Credit card-bro.png"

// snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



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


  // For Error Message
  const [msg, setMsg] = useState("");
  const [variant, setvariant] = useState("");

  // For SnackBar
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const save = (data) => {
    setMsg(data.message)
    setvariant(data.variant)
    setOpen(true)
  }


  var userInfo = props.userInfo;
  console.log("userInfo", userInfo.email)

  // states for profile API
  const [email, setEmail] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const deliveryCharges = 100



  const publishableKey = "pk_test_51LfJUAEw3O5g6z40A1zVTfiRrfdFI8UQ17qFYNzd2q9UTO8ARzVCFXGSSKGcVXYAeGZQ3CQBIpPLJUzw6wwd1vQS00Q96rUppf";
   
  const onToken = token => {
    const body = {
      amount: parseInt(totalPrice+deliveryCharges),
      token: token
  };
  
  fetch(process.env.REACT_APP_BASE_URL + '/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        save(data)
        console.log("stripe data", data)
      }
      );
  };


  function getCart() {
    fetch(process.env.REACT_APP_BASE_URL + '/Cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userInfo.email })
    })
      .then(response => response.json())
      .then(data => {
        if(data.result[0]){

        console.log("get cart data", data.result[0].items)
        setEmail(data.result[0].email)
        setItems(data.result[0].items)
        let total=0;
        data.result[0].items.map((e)=>{
            total+=e.totalPrice
        })
        setTotalPrice(total)
        }
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
    <>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
      {msg}
    </Alert>
  </Snackbar>
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
                      <td style={{ paddingLeft: "1%" }}>
                        <Row >
                          <Col md={3}>
                            <Image width="55em" height="55em" src={e.productImage} roundedCircle />
                          </Col>
                          <Col style={{ paddingTop: "2%", textAlign: "start" }} md={6}>
                            <span style={{ marginLeft: "10%" }}>{e.productName}</span>
                          </Col>
                        </Row>
                      </td>
                      <td style={{ color: "red", paddingTop: "1%" }}><strong >{e.productPrice}</strong> </td>
                      <td style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                        {/* {console.log("QUAN",e.quantity)}
                        <Form.Select  value={e.quantity} aria-label="Select">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </Form.Select> */}
                       <strong> {e.quantity} </strong>
                      </td>
                      <td style={{ color: "red", paddingTop: "1%",width:"25%" }}><strong >{e.totalPrice}</strong> </td>
                      
                    </tr>
                  )
                })
                
                :
                null
                
            }
             <tr style={{ textAlign: "center" }}>
                      <td style={{ paddingLeft: "3%" }}>
                        <Row>
                          <Col md={4}>
                          </Col>
                          <Col style={{ paddingTop: "2%", textAlign: "start" }} md={8}>
                            <span style={{ marginLeft: "10%" }}></span>
                          </Col>
                        </Row>
                      </td>
                      <td style={{ color: "red", paddingTop: "1%" }}><strong ></strong> </td>
                      <td style={{ paddingLeft: "2%", paddingRight: "2%" }}>
                      </td>
                      <td style={{ color: "red", paddingTop: "1%"}}>
                        <Row style={{display:"flex" }}>
                        <div style={{width:"60%"}}> <strong> Total Price: </strong> </div>
                        <div style={{width:"10%"}}>${totalPrice}</div>
                        </Row>
                        <Row style={{display:"flex",marginTop:"3%" }}>
                        <div style={{width:"60%"}}> <strong> Delivery: </strong> </div>
                        <div style={{width:"10%"}}>$100</div>
                        </Row>
                        <Row style={{display:"flex",marginTop:"3%" }}>
                        <div style={{width:"60%"}}> <strong> Overall Price: </strong> </div>
                        <div style={{width:"10%"}}>${totalPrice+deliveryCharges}</div>
                        </Row>
                        
                       </td>

                    </tr>
          </tbody>
        </Table>

      

      </motion.div>
      <StripeCheckout
      label="Pay With Card" //Component button text
      name="Computer Hi-tech" //Modal Header
      description="Make your Payment"
      panelLabel="PAY" //Submit button in modal
      amount={(totalPrice+deliveryCharges)*100} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRC2ZVSzT9-ExtSSVCnuKFvd6w_dkj-l3cJEIu24uQ73PrniUaP" //Pop-in header image
      billingAddress={false}
      alipay // accept Alipay (default false)
  bitcoin // accept Bitcoins (default false)
  allowRememberMe // "Remember Me" option (default true)
  email={userInfo.email}
    />

    </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, null)(Cart);
