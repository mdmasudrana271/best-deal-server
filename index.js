const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
require("dotenv").config();


const app = express();

// middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.8tifwil.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


async function run(){
    try{
        const usersCollection = client.db("the-cozy-library").collection("users");
    }
    finally{

    }
}

run().catch((error) => {
    console.log(error.message);
  });
  
  app.get("/", (req, res) => {
    res.send("the best deal server running");
  });
  
  app.listen(port, () => {
    console.log(`i am running on port ${port}`);
  });