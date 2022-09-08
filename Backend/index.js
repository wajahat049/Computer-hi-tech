// const axios = require('axios');



const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");
const{Login,loadMongoDb,postData, ContactForm, getCartData, addToCart, AddChatMessageFromUser, getChatMessages, LoadDataIntoDatabase, StripePayment, ProductsAcctoCategory,getProducts} = require("./functions.js");

loadMongoDb()

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


const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});

// setTimeout(()=>{
//   LoadDataIntoDatabase()
//   },3000)

