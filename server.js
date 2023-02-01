// dependecies 
const express = require("express"); 

const mongoose = require("mongoose"); 

const Movies = require("./models/movies"); 

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
app.get("/movies", (req,res) => {
 Movies.find({}, (error, allMovies) => {
    res.render("index.ejs", {
     movies:allMovies
    });
 });
});

// New 
app.get("/movies/new", (req,res) => {
 res.render("new.ejs");
}); 

// Delete 
app.delete("/movies/:id", (req, res) => {
   res.send("deleted")
}); 

// Update 

// Create
app.post("/movies", (req, res) => {
    if(req.body.watched === "on") {
        req.body.watched = true; 
    } else {
        req.body.watched = false; 
    }

    Movies.create(req.body, (error, createdMovie) => {
    res.redirect("/movies");

    });
}); 

// Edit

// Show 
app.get("/movies/:id", (req,res) => {
  Movies.findById(req.params.id, (error, foundMovie) => {
   res.render("show.ejs", { 
    movie:foundMovie
      }); 
   }); 
});  
// tell the app to listen 
app.listen(PORT, () => {
   console.log(`Express is listening on port:${PORT}`);
}); 