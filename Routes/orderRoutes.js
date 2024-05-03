const {Router} = require('express');
const {orderModel} = require('../Models/Order.model');

const orderRouter = Router();

orderRouter.post('/api/v1/create',async(req,res)=>{
    try {
        const {Item,Name} = req.body;
        if(! Item || ! Name){
            res.status(204).json({'message':'Empty body'});
            return
        };
        const newOrder = new orderModel({
            Item,
            Name
        });
        await newOrder.save();
    } catch (error) {
        console.log('Error while creating order');
        res.status(500).json({'message':'Internal Server Error'});
    }
})

orderRouter.delete('/api/v1/delete/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            res.status(204).json({'message':'Order id missing in request param'});
            return
        }
        const deletedOrder = await orderModel.findOneAndDelete({_id:id});
        res.status(200).json({'message':'Order deleted successfully','order':deletedOrder});
    } catch (error) {
        console.log('Error while deleting order');
        res.status(500).json({'message':'Internal Server Error'});
    }
})

module.exports = {
    orderRouter
}