const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 


const moviesSchema = new Schema({
  category: {type: String},
  title: {type: String, required: true },
  streamingService: {type: String, }, 
  year: { type: Number, }, 
  img: {type: String}, 
  watched: Boolean
});

module.exports = mongoose.model("Movies", moviesSchema); 