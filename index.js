const express = require('express')
const mongoose = require('mongoose');
const Users = require("./models/user.model.js")
const userRoute = require('./routes/user.route.js');
const app = express();

//middleware
app.use(express.json());//use json format
app.use(express.urlencoded({extended: false}));//use form format 

//routes
app.use("/user",userRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API server Updated');
  });

mongoose.connect('mongodb+srv://userData:userData@cluster1.0gai7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
  .then(() =>{ 
    console.log('Connected to database!') 
})
  .catch(()=>{
    console.log("Connection failed");
});

app.listen(3001,()=>{
    console.log("server is running")
});