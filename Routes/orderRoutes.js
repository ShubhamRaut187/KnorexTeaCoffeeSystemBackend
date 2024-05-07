const {Router} = require('express');
const {orderModel} = require('../Models/Order.model');

const orderRouter = Router();

orderRouter.post('/api/v1/create',async(req,res)=>{
    try {
        const {Breakfast,Lunch,Beverages,Session,UserId,Name} = req.body;
        if(! Item || ! Name){
            res.status(204).json({'message':'Empty body'});
            return
        };
        const newOrder = new orderModel({
           Breakfast,
           Lunch,
           Beverages,
           Session,
           UserId,
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

orderRouter.get('api/v1/orders',async(req,res)=>{
    const{start,end} = req.query;
    try {
        if(!start || !end){
            const orders = await orderModel.find({});
            req.status(200).json({'message':'All orders','orders':orders});
        }
        else{
            const orders = await orderModel.find({
                timestamp:{$gte:start,$lte:end}
            })
            req.status(200).json({'message':`orders between ${start} and ${end}`,'orders':orders});
        }
    } catch (error) {
        console.log('Error while getting orders');
        res.status(500).json({'message':'Internal Server Error'});
    }
})

module.exports = {
    orderRouter
}