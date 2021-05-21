const Restaurant = require("../models/Restaurant");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const getRestaurants = async(req, res, next) =>{
    try {
        const getRestaurant = await Restaurant.find().populate('city_id').populate('tag_id');
        res.json(getRestaurant);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

const getOneRestaurant = async(req, res, next) =>{
    const { id } = req.params;
    try{
        const targetRestaurant = await Restaurant.findById({_id : id}).populate('city_id').populate('tag_id');
        if (!targetRestaurant) return res.status(404).send('No such Restaturent')
        res.json(targetRestaurant);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

const createRestaurant = async(req,res,next) =>{
    const { name, image, description, city, tags, location  } = req.body
    try{
        const createRestaurant = await Restaurant.create({name, image, description, city, tags, location  })
        res.json(createRestaurant)
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

module.exports = {
    getRestaurants,
    createRestaurant,
    getOneRestaurant
}