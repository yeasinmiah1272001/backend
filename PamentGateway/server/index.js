const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;




app.use(cors());
app.use(express.json());


// console.log(process.env.DB_PASS)
// console.log(process.env.DB_USER)

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const blogCollection = client.db("pamentBlog").collection("pamentBlog");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // auth releted appi

    app.get("/", (req, res) => {
      res.send("blog-running...");
    });

    app.get("/blog", async (req, res) => {
      const result = await blogCollection.find().toArray();
      res.send(result);
    });

    app.get("/blog/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await blogCollection.findOne(query);
      console.log(result);
      res.send(result);
    });

    app.post("/order", async (req, res) => {
      const order = req.body;
        console.log(order);
      // const result = await blogCollection.insertOne(user);
      // console.log(result);
      // res.send(result);
    });

    app.listen(port, () => {
      console.log(`Simple Crud is Running on port ${port}`);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    //     await client.close();
  }
}
run().catch(console.dir);
