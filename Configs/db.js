const mongoose = require('mongoose');
require('dotenv').config();

const databaseConnection = mongoose.connect(process.env.MONGODB);

// g1r7YA2pJlh33cR9
module.exports = {
    databaseConnection
}