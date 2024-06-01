const express = require("express");
const app = express();
const cors = require("cors");
const services = require("./services.json");

const port = 5000;

// midleware

app.use(cors());


app.get("/", (req, res) => {
  res.send("server is runninggggggggg!");
});

app.get('/services', (req, res) =>{
       res.send(services)
})

app.get('/services/:id', (req, res) =>{
       const id = parseInt(req.params.id)

       const findService = services.find((service) => service.id === id) || {}
       res.send(findService)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
