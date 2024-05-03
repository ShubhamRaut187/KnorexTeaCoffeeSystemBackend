const express = require('express');
const cors = require('cors');

// DB Connection
const {databaseConnection} = require('./Configs/db.js') 

const {userRouter} = require('./Routes/userRoutes.js');
const {orderRouter} = require('./Routes/orderRoutes.js')
require('dotenv').config;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());


// Routes
app.get('/',(req,res)=>{
    res.send('Welcome to backend server')
})
app.use('/user',userRouter);
app.use('/order',orderRouter);


app.listen(process.env.PORT,async()=>{
    try {
        await databaseConnection;
        console.log(`Server started on port ${process.env.PORT}`);
    } catch (error) {
        console.log(`Error while starting the server`);
    }
})