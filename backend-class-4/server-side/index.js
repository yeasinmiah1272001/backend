const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://formdata:HYHtQydKBBfXTZuh@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    console.log("Connected to MongoDB");

    const userCollection = client.db("formDataDB").collection("data");


    app.get("/", (req, res) =>{
       res.send("server is runninggggg")
    })

    app.get("/users", async(req, res) =>{
        const result = await userCollection.find().toArray();
      res.send(result);
    })

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await userCollection.findOne(query);
      console.log(result);
      res.send(result);
    });



    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("New user:", user);
      const result = await userCollection.insertOne(user);
      console.log("Insert result:", result);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("delete", id);
      const query = {
        _id: new ObjectId(id),
      };
      const result = await userCollection.deleteOne(query);
      console.log(result);
      res.send(result);
    });

    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      console.log("id", id, data);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUSer = {
        $set: {
          name: data.name,
          password: data.passWord,
          email: data.email,
        },
      };
      const result = await userCollection.updateOne(
        filter,
        updatedUSer,
        options
      );
      res.send(result);
    });

    

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } finally {
    // Ensure that the client will close when you finish/error
    // await client.close(); // Commented out to keep the client connected while the server is running
  }
}
run().catch(console.error);
