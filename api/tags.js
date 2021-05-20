const express = require('express');
const router = express.Router();

const { getTags, getOneTag, createTag, getRestaurantsByTag} = require('../controllers/tags');

router.get('/', getTags);
router.get('/:id', getOneTag);
router.get('/restaurants/:name', getRestaurantsByTag);
router.post('/', createTag);


module.exports = router;