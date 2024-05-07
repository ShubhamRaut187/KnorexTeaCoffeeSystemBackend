const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    Breakfast:{
        type:String,
        required:true
    },
    BreakfastRate:{
        type:Number,
        required:true
    },
    Lunch:{
        type:String,
        required:true
    },
    LunchRate:{
        type:String,
        required:true
    },
    Beverages:{
        type:String,
        required:true
    },
    Session:{
        type:String,
        required:true
    },
    Note:{
        type:String,
    },
    UserId:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    }
},{timestamps:true});

const orderModel = mongoose.model('orders',orderSchema);

module.exports = {
    orderModel
}