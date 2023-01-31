// dependecies 
const express = require("express"); 

const mongoose = require("mongoose"); 

//initialize the application 
const app = express(); 

// configure settings 
require("dotenv").config(); 

const PORT = process.env.PORT;

const DATABASE_URL = process.env.DATABASE_URL; 


//establish conenction to mongodb 
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE_URL); 

const db = mongoose.connection; 

db.on("connected", () => {
  console.log("Connected to MongoDB"); 
});


db.on("error" , (error) => {
    console.log("An error occurred with MongoDB:" + error.message);
}); 

// mount middleware 
app.use(express.urlencoded({ extended: false})); 

// mount routes 

// INDUCES 

// Index 

// New 

// Delete 

// Update 

// Create
app.post("/movies", (req, res) => {
    if(req.body.watched === "on") {
        req.body.watched = true; 
    } else {
        req.body.watched = false; 
    }
  res.send(req.body);
  
}); 

// Edit

// Show 

// tell the app to listen 
app.listen(PORT, () => {
   console.log(`Express is listening on port:${PORT}`);
}); 