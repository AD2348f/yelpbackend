const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const pointSchema = new mongoose.Schema({
//     type: {
//       type: String,
//       enum: ['Point'],
//       required: true
//     },
//     coordinates: {
//       type: [Number],
//       required: true
//     }
//   });

const restaurantSchema = new Schema({
  name: { type: String, min: 2, max: 50, required: true },
  cityId: {
    type: mongoose.Schema.ObjectId,
    ref: "City",
    required: true,
  },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
  /* comment:[{ type: Schema.Types.ObjectId, ref: 'Comment', required: true }],
    location: {type: pointSchema,required: true} */
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
