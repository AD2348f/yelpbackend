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
    type: mongoose.Schema.ObjectId,
    ref: "Tag",
    required: [true, 'Please add a tag'],
  },
/*   comment:[{ 
    type: mongoose.Schema.ObjectId, 
    ref: 'Comment', 
    required: true 
  }], */
    // location: {type: pointSchema,required: true}
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
