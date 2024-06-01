const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
const cors = require("cors");
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://blackcoffee:od6zzupR5x1IICYm@cluster0.qlvqjvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    const coffeeCollection = client.db("coffeeDataDB").collection("coffee");

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.get("/", (req, res) => {
      res.send("coffee is running");
    });

    app.get("/coffee",async(req,res) =>{
       const result = await coffeeCollection.find().toArray();
       res.send(result)
    })

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await coffeeCollection.findOne(query);
      console.log(result);
      res.send(result);
    });

     app.post("/coffee", async (req, res) => {
       const user = req.body;
       console.log("New user:", user);
       const result = await coffeeCollection.insertOne(user);
       console.log("Insert result:", result);
       res.send(result);
     });

     app.delete("/coffee/:id", async (req, res) => {
       const id = req.params.id;
       console.log("delete", id);
       const query = {
         _id: new ObjectId(id),
       };
       const result = await coffeeCollection.deleteOne(query);
       console.log(result);
       res.send(result);
     });


     app.put("/coffee/:id", async (req, res) => {
       const id = req.params.id;
       const data = req.body;
       console.log("id", id, data);
       const filter = { _id: new ObjectId(id) };
       const options = { upsert: true };
       const updatedUSer = {
         $set: {
           productName: data.name,
           cheif: data.cheif,
           suplier: data.suplier,
           price: data.price,
           des: data.des,
           img: data.img,
         },
       };
       const result = await coffeeCollection.updateOne(
         filter,
         updatedUSer,
         options
       );
       res.send(result);
     });





    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } finally {
//     await client.close();
  }
}

run().catch(console.dir);
