const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 5000;

// require('crypto').randomBytes(64).toString('hex');


app.use(cors());
app.use(express.json());

// bistroBossDb;
// NSZfFhJ9ztHHb6qD;
(process.env.DB_PASS)





const uri =
  `mongodb+srv://${process.env.DB_USSER}:${process.env.DB_PASS}@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const menuCollection = client.db("bistroBossDb").collection("menu");
    const cartAddCollection = client.db("bistroBossDb").collection("carts");
    const usersCollection = client.db("bistroBossDb").collection("users");



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // jwt releted api

    app.post("/jwt", async (req, res) =>{
      const user = req.body;
      const token = jwt.sign(user, process.env.SECRET_ACCEStOKEN, {
        expiresIn:"1hr"
      });
      res.send({token})
    })

    // midleware
    const veryFiedToken = (req, res, next) =>{
      console.log("tokennnnnn", req.headers)
      next()
    }


    app.get("/",veryFiedToken, (req, res) => {
      res.send("Bistro-boss-running...");
    });

    app.get("/menu", async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    });

    app.post("/carts", async (req, res) => {
      const cartItem = req.body;
      //   console.log(user);
      const result = await cartAddCollection.insertOne(cartItem);
      console.log(result);
      res.send(result);
    });

     app.get("/carts", async (req, res) => {
      const email = req.query.email;
      const query = {email:email}
       const result = await cartAddCollection.find(query).toArray();
       res.send(result);
     });
     app.delete("/carts/:id", async (req, res) => {
       const id = req.params.id;
       console.log("delete", id);
       const query = {
         _id: new ObjectId(id),
       };
       const result = await cartAddCollection.deleteOne(query);
       console.log(result);
       res.send(result);
     });

    //  user releted

    app.post("/users", async (req, res) => {
      
      const user = req.body;
      //   console.log(user);
      const result = await usersCollection.insertOne(user);
      console.log(result);
      res.send(result);
    });

     app.get("/users", async (req, res) => {
      console.log(req.headers);
       const result = await usersCollection.find().toArray();
       res.send(result);
     });

     app.delete("/users/:id", async (req, res) => {
       const id = req.params.id;
       console.log("delete", id);
       const query = {
         _id: new ObjectId(id),
       };
       const result = await usersCollection.deleteOne(query);
       console.log(result);
       res.send(result);
     });

    //  petch
    app.patch("/users/admin/:id", async (req, res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id) }

       const updateDoc = {
         $set: {
          role: "admin"
         },
       };
       const result = await usersCollection.updateOne(filter, updateDoc)
       res.send(result)


    })




    app.listen(port, () => {
      console.log(`bistro-boss-running ${port}`);
    });



  } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
  }

  

}
run().catch(console.dir);





// const uri = `mongodb+srv://${process.env.DB_USSER}:${process.env.DB_PASS}@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//   const menuCollection = client.db("bistroBossDb").collection("menu");





