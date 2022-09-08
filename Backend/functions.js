const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const http = require("https");
var request = require('request');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");
const stripe = require('stripe')('sk_test_51LfJUAEw3O5g6z40FbuVy7n69YdqBkZaEhnItQqW9aDMdbQ5EzNFog1woNnodZs1Oya21dallyiwu8r15gxG0yFG00godVLFz0')

var mongoResult;

//load MongoDb
async function loadMongoDb() {
    const uri =
        "mongodb+srv://wajahat:wajju123%40@cluster0.fhtdu.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });
    mongoResult = await client.connect();
    // console.log("mongoResult", mongoResult)
}

const LoadDataIntoDatabase=()=>{
var options = {
    url: 'https://api.amzapi.com/v1/search?apikey=362f6f50-2f77-11ed-a523-5f6e2f40f0f3&query=computernetworkaccessories'
  };
  
  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body)
         
          data.search_results.map((item)=>{
            console.log("title",item.title);
            console.log("image",item.image);
            console.log("asin",item.asin);
            console.log("price",item.prices[0].value);
            console.log("ratings",item.rating);
            console.log("delivery",item.delivery);
            let collection = mongoResult.db("ComputerHiTech").collection("Data");
collection.insertOne({ title: item.title, image:item.image, asin: item.asin, price: item.prices[0].value,delivery:item.delivery,ratings:item.rating,category:"Networks" }, function (error, response) {
            // console.log("Successfully Signup")
        });



          })
      }
  }
  
  request(options, callback);

}

// Login
const Login = async (req, res) => {
    // console.log("Req", req.body)
    let collection = mongoResult.db("ComputerHiTech").collection("Users");

    collection.findOne({ email: req.body.email }).then((user, err) => {
        if (user) {
            if (user.pass == req.body.pass) {
                res.status(200).send({ message: "Successfully Login", variant: "success" });
                console.log("Successfully Login")
            } else {
                res.status(400).send({ message: "Incorrect Password", variant: "error" });
                console.log("Incorrect Password")
            }
            return;
        } else {
            res.status(400).send({ message: "Incorrect Email", variant: "error" });
            console.log("Incorrect Email")
            return;
        }
    });

};

// Signup
const postData = async (req, res) => {
    let collection = mongoResult.db("ComputerHiTech").collection("Users");
    collection.findOne({ email: req.body.email }).then((user, err) => {
        if (user) {
            res.status(400).send({ message: "Failed! Email already exist", variant: "error" });
            console.log("Failed! Email has already exist")
        } else {
            collection.insertOne({ email: req.body.email, password: req.body.password, name: req.body.name }, function (error, response) {
                if (err) throw err;
                res.status(200).send({ message: "Successfully Signup", variant: "success" });
                console.log("Successfully Signup")
            });

        }
        return;
    });

}


// All Data
async function getProducts() {
    let collection = mongoResult.db("ComputerHiTech").collection("Data");
    let response = await collection.find({}).toArray();
    return response;
}


// Contact Form
const ContactForm = async (req, res) => {
    let collection = mongoResult.db("ComputerHiTech").collection("ContactFormInfo");
    collection.insertOne({ email: req.body.email, name: req.body.name, mesage: req.body.message }, function (error, response) {
        if (error) throw error;
        console.log("Successfully Submitted Contact form")
        res.status(200).send({ message: "Successfully Filled" })
        return;
    });

}


//get cart data
const getCartData = async (req, res) => {
    console.log("cart data get", req.body.email)
    let collection = mongoResult.db("ComputerHiTech").collection("Cart");
    collection.find({ email: req.body.email }).toArray().then((result, err) => {
        console.log(result)
        res.status(200).send({ result: result })
        return
    })

}

//get cart data
const ProductsAcctoCategory = async (req, res) => {
    console.log("ProductsAcctoCategory", typeof(req.body.category))
    let collection = mongoResult.db("ComputerHiTech").collection("Data");
    collection.find({category :  req.body.category}).toArray().then((result, err) => {
        console.log(result)
        res.status(200).send({ result: result })
        return
    })

}


//add to cart 
const addToCart = async (req, res) => {
    console.log("AddToCart data ", req.body.email, req.body.items, req.body.productImg, req.body.totalPrice)
    let collection = mongoResult.db("ComputerHiTech").collection("Cart");
    var newvalues = {
        $set: {
            items: req.body.items, productImg: req.body.productImg, totalPrice: req.body.totalPrice
        }
    };
    collection.updateOne({ email: req.body.email }, newvalues, (result, err) => {
        res.status(200).send({ message: "Successfully add to Cart" })
        return
    })
}


// Add Chat message from user in database
const AddChatMessageFromUser = async (req, res) => {
    let collection = mongoResult.db("ComputerHiTech").collection("Chat");
    // collection.find({ email: req.body.email }).toArray().then((result, err) => {
        console.log("MSGS",req.body.messages)
    // })
    collection.findOne({email: req.body.email}).then(
        entry => {
            console.log("Entry",entry)
            if (!entry) {
                collection.insertOne(
                    {
                        email: req.body.email,
                        messages:{user:req.body.message,admin:'',id:1}
                    }
                ).then((result) => {
                    res.status(200).send({ message: "Object Created" })
                    console.log("Object Created")
                })
            }
            else{
    var allMsgs = [...req.body.messages,{user:req.body.message,admin:'',id:entry.messages.length}]
    var newvalues = { $set: {messages:allMsgs} };
        collection.updateOne({ email: req.body.email },newvalues,(result, err) => {
            if (!err){
            res.status(200).send({ message: "Message Inserted" })
            console.log("Message Inserted")
            return
            }
        })
    }
    })
}

// Get All Messages w.r.t User
const getChatMessages = async(req, res) => {
    console.log("getChatMessages", req.body)
    let collection = mongoResult.db("ComputerHiTech").collection("Chat");
        collection.find({ email: req.body.email }).toArray().then((result, err) => {
            console.log(result,err)
            res.status(200).send({ result: result })
            return
        })
}


// Stripe Payment
const StripePayment = async(req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd"
      };
      console.log("STRIPE BODY",body)
      stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).send({ error: stripeErr });
        } else {
          res.status(200).send({ success: stripeRes });
        }
      });
}




module.exports = { Login, postData, loadMongoDb, ContactForm, getCartData, addToCart,AddChatMessageFromUser,getChatMessages,LoadDataIntoDatabase,StripePayment,ProductsAcctoCategory,getProducts }