const Restaurant = require("../models/Restaurant");

const getRestaurants = async(req, res, next) =>{
    try {
        const getRestaurant = await Restaurant.find({}).populate('city').populate('tags');
        res.json(getRestaurant);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

const getOneRestaurant = async(req, res, next) =>{
    const { id } = req.params;
    try{
        const targetRestaurant = await Restaurant.findById({_id : id}).populate('city').populate('tags');
        if (!targetRestaurant) return res.status(404).send('No such Restaturent')
        res.json(targetRestaurant);
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

const createRestaurent = async(req,res,next) =>{
    const { name, image, description, city, tags, location  } = req.body
    try{
        const createRestaurent = await Restaurant.create({name, image, description, city, tags, location  })
        res.json(createRestaurent)
    }
    catch(e){
        res.status(500).send(e.message);
    }
}

module.exports = {
    getRestaurants,
    createRestaurent,
    getOneRestaurant
}