const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");

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
    console.log("mongoResult", mongoResult)
}

// Login
const Login = async(req, res) => {
    // console.log("Req", req.body)
    let collection = mongoResult.db("ComputerHiTech").collection("Users");

    collection.findOne({ email: req.body.email }).then((user, err) => {
        if (user) {
            if (user.pass == req.body.pass) {
                res.status(400).send({ message: "Successfully Login", variant: "success" });
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
const postData = async(req, res) => {
    let collection = mongoResult.db("ComputerHiTech").collection("Users");
    collection.findOne({ email: req.body.email }).then((user, err) => {
        if (user) {
            res.status(400).send({ message: "Failed! Email already exist", variant: "error" });
            console.log("Failed! Email has already exist")
        } else {
            collection.insertOne({ email: req.body.email, password: req.body.password, name: req.body.name }, function(error, response) {
                if (err) throw err;
                res.status(200).send({ message: "Successfully Signup", variant: "success" });
                console.log("Successfully Signup")
            });

        }
        return;
    });

}

module.exports = { Login, postData, loadMongoDb}