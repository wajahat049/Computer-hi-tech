// const axios = require('axios');

// // set up the request parameters
// const params = {
//   api_key: "C15C2F4CE7F14E2EA1AFCFEE8846D42C",
//   type: "search",
//   amazon_domain: "amazon.com",
//   output: "json",
//   search_term: "memory cards",
//   sort_by: "price_low_to_high"
// }

// // make the http GET request to Rainforest API
// axios.get('https://api.rainforestapi.com/request', { params })
//   .then(response => {

//     // print the JSON response from Rainforest API
//     console.log(JSON.stringify(response.data.search_results, 0, 10));
//     // console.log("rsponseeeee",response.data.search_results)

//   }).catch(error => {
//     // catch and print the error
//     console.log(error);
//   })



const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");
const{Login,loadMongoDb,postData, ContactForm, getCartData} = require("./functions.js")

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

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});