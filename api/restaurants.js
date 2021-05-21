const express = require("express");
const router = express.Router();

const {
  createRestaurant,
  getRestaurants,
  getOneRestaurant,
  searchRestaurants,
} = require("../controllers/restaurants");

router
  .route("/")
  .get(getRestaurants)
  .get(searchRestaurants);

router.get("/:id", getOneRestaurant);
router.post("/", createRestaurant);

module.exports = router;
