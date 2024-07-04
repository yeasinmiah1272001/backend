const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

const cookieParser = require("cookie-parser");
const cors = require("cors");

// midleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

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
      const bookCollection = client.db("bookstore").collection("bookstore");
      const addBokkCollection = client.db("bookstore").collection("addBook");
    

      
    


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // auth releted appi

   app.get("/books", async(req, res) =>{
    const result = await bookCollection.find().toArray();
    res.send(result)
   })

  app.get("/books/:category", (req, res) => {
    const category = req.params.category;
    const query = { category: category };

    bookCollection.find(query).toArray()
      .then((result) => {
        if (result.length > 0) {
          res.status(200).send(result);
        } else {
          res.status(404).send({ message: "No books found in this category" });
        }
      })
     
  });


  app.post("/borrow", async (req, res) => {
    const user = req.body;
      console.log(user);
    const result = await addBokkCollection.insertOne(user);
    console.log(result);
    res.send(result);
  });

    app.get("/borrow", async (req, res) => {
      const result = await addBokkCollection.find().toArray();
      res.send(result);
    });

    app.delete("/borrow/:id", async (req, res) => {
      const id = req.params.id;
      console.log("delete", id);
      const query = {
        _id: new ObjectId(id),
      };
      const result = await addBokkCollection.deleteOne(query);
      console.log(result);
      res.send(result);
    });

    app.put("/borrow/:id", async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      console.log("id", id, data);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUSer = {
        $set: {
          category: data.category,
          collectionDate: data.collectionDate,
          image: data.image,
          isbn: data.isbn,
        },
      };
      const result = await addBokkCollection.updateOne(
        filter,
        updatedUSer,
        options
      );
      res.send(result);
    });


    app.get("/borrow/:id", async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
      };
      const result = await addBokkCollection.findOne(query);
      console.log(result);
      res.send(result);
    });





 app.get("/", (req, res) => {
   res.send("book-store-running...");
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





