const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    }
},{timestamps:true})

const userModel = mongoose.model('users',userSchema);

module.exports = {
    userModel
}