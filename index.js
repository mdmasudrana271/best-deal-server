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
        const usersCollection = client.db("BestDeal").collection("users");
        const productsCollection = client.db("BestDeal").collection("products");


        app.post("/users", async (req, res) => {
          const user = req.body;
          const result = usersCollection.insertOne(user);
          res.send(result);
        });

        app.post("/products", async (req, res) => {
          const product = req.body;
          const result = await productsCollection.insertOne(product);
          res.send(result);
        });
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