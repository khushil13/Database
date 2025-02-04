const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name:{
        type :String,
        required : true
    },
    city:{
        type:String,
        required:true
    },
    itemArray:[{
        type:String
    }]
});

const itemSchema = new mongoose.Schema({
    name:{
        type :String,
        required : true
    },
    price:{
        type:Number,
        required:true
    }
});
