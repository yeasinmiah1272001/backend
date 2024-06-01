const express = require("express");
const app = express();
require("dotenv").config();
const port = 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
const cors = require("cors");
app.use(cors());
app.use(express.json());
// jaVkZyvbhjcHgsQW;
// assingment10;
console.log(process.env.DB_PASS)
console.log(process.env.DB_USER)


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority`;

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
    await client.connect();
    //     add your collection
    const brandCollection = client.db("brandCollection").collection("brand");
    const brandAddCollection = client
      .db("brandAddCollection")
      .collection("add");

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.get("/", (req, res) => {
      res.send("assingment-10 running");
    });

    app.get("/brand", async (req, res) => {
      const result = await brandCollection.find().toArray();
      res.send(result);
    });

    app.get("/brand/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await brandCollection.findOne(query);
      console.log(result);
      res.send(result);
    });

    app.get("/added/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await brandAddCollection.findOne(query);
      console.log(result);
      res.send(result);
    });

    app.get("/added", async (req, res) => {
      const result = await brandAddCollection.find().toArray();
      res.send(result);
    });

    app.post("/added", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await brandAddCollection.insertOne(user);
      console.log(result);
      res.send(result);
    });

    app.delete("/added/:id", async (req, res) => {
      const id = req.params.id;
      console.log("delete", id);
      const query = {
        _id: new ObjectId(id),
      };
      const result = await brandAddCollection.deleteOne(query);
      console.log(result);
      res.send(result);
    });

    // update
    app.put("/added/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      console.log("id", id, data);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUSer = {
        $set: {
          ProductName:data.ProductName,
          rating:data.rating,
          price:data.price,
          category:data.category,
          des:data.des,
          img:data.img
        },
      };
      const result = await brandAddCollection.updateOne(
        filter,
        updatedUSer,
        options
      );
      res.send(result);
    });

    app.post("/added", async (req, res) => {
      const user = req.body;
      //   console.log(user);
      const result = await brandAddCollection.insertOne(user);
      console.log(result);
      res.send(result);
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } finally {
       // await client.close();
  }
}
run().catch(console.dir);





















// app.get("/brand/category/:category", async (req, res) => {
    //   const category = req.params.category;
    //   const query = {
    //     _category: category,
    //   };
    //   const result = await brandCollection.find(query);
    //   console.log(result);
    //   res.send(result);
    // });