const express = require('express');
const service = require('./service.json')
const app = express();
const port = 5000;

// midleware
// const cors = require("cors")
// app.use(cors());


 app.get('/', (req, res) =>{

       res.send("hello worldsssssssssss")
 })

 app.get('/service/:id', (req, res) =>{
       const id = (req.params.id)
       console.log(id)
       const services = service.find((data) => data.id === id) || {}
       res.send(services)
       
 })



 app.get('/service', (req, res) =>{ 
       res.send(service)
 })


 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
 });