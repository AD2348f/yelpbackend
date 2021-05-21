const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { 
    type: String, 
    min: 2, 
    max: 50, 
    required: [true, 'Please add a name'],
  },
  city_id: {
    type: mongoose.Schema.ObjectId,
    ref: "City",
    required: [true, 'Please add a city'],
  },
  tag_id: {
    type: [mongoose.Schema.ObjectId],
    ref: "Tag",
    required: [true, 'Please add a tag'],
  },
  description: { 
    type: String , 
    required: [true, 'Please add a description'],
  },
  stars: {
    type: Number,
    min: 0, 
    max: 5,
    required: [true, 'Please add a rating'],
  }
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
