const express = require('express');
const router = express.Router();

const {getCities, createCity, getCity, getRestaurantsByCity, addRestaurantInCity} = require('../controllers/cities');

router.get('/', getCities);
router.get('/:id', getCity);
router.get('/restaurants/:name', getRestaurantsByCity);
router.post('/', createCity);
router.put('/:id', addRestaurantInCity);


module.exports = router;