const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    Item:{
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