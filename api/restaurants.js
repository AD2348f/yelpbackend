const express = require('express');
const router = express.Router();

const {createRestaurent, getRestaurants, getOneRestaurant} = require('../controllers/restaurants');

router.get('/', getRestaurants);
router.get('/:id', getOneRestaurant); 
router.post('/', createRestaurent)

module.exports = router;