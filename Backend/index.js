// const axios = require('axios');



const express = require("express");
const app = express();
const cors = require("cors");
const socket = require("socket.io");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");
const{Login,loadMongoDb,postData, ContactForm, getCartData, addToCart, AddChatMessageFromUser, getChatMessages, LoadDataIntoDatabase, StripePayment, ProductsAcctoCategory,getProducts, updateStatus,DetailForm} = require("./functions.js");

loadMongoDb()

app.get("/", (req, res) => {
    res.send("<h1>Computer Hi-Tech</h1>");
});

// For Signup
app.post("/CreateUser", (req, res) => {
  console.log("New User", req.body);
  postData(req, res);
});

// For Login
app.post("/Login", (req, res) => {
  console.log("New User", req.body);
  Login(req, res);
});

// All Data of Products
app.get("/AllProducts", (req, res) => {
  var resp = getProducts();
  resp.then((e) => {
    res.send(e);
  });
});

// For ContactForm
app.post("/ContactForm", (req, res) => {
  console.log("Form", req.body);
  ContactForm(req, res);
});

// For Get Cart Data
app.post("/Cart", (req, res) => {
  console.log("Cart", req.body);
  getCartData(req, res);
});

// For Add to Cart Data
app.post("/AddToCart", (req, res) => {
  console.log("AddToCart", req.body);
  addToCart(req, res);
});

// For Products According to Category
app.post("/ProductsAcctoCategory", (req, res) => {
  console.log("ProductsAcctoCategory", req.body);
  ProductsAcctoCategory(req, res);
});

// For Adding Chat message from User
app.post("/AddChatMessageFromUser", (req, res) => {
  console.log("AddChatMessageFromUser", req.body);
  AddChatMessageFromUser(req, res);
});

// For Adding Chat message from User
app.post("/getChatMessages", (req, res) => {
  console.log("getChatMessages", req.body);
  getChatMessages(req, res);
});

// For Stripe Payment
app.post("/payment", (req, res) => {
  console.log("Stripe Payment", req.body);
  StripePayment(req, res);
});

// For DeatilForm
app.post("/DetailForm", (req, res) => {
  console.log("Detail Form", req.body);
  DetailForm(req, res);
});


const PORT = process.env.PORT || 8001;

const server = app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});

// setTimeout(()=>{
//   LoadDataIntoDatabase()
//   },3000)
var obj={}

const io = socket(server);


// make a connection with the user from server side
io.on('connection', (socket)=>{
  console.log('New user connected');
 

  // disconnect from user
  // socket.on("disconnect", (e) => {
  //   console.log("User disconnected",e);
    
  // });

  socket.on('disconnect', (status) => {
    console.log('userDisconnected',Object.values(obj)[0]);
    setTimeout(()=>{
      updateStatus({email:Object.values(obj)[0],isActive:false})
    },2000)
  
  });

  socket.on('userActive', (status)=>{
    console.log('active status', status);
    obj[socket.id] = status.email
    setTimeout(()=>{
      updateStatus(status)
    },2000)
  });

  

});
