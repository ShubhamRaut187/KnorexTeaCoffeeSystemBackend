const {Router} = require('express');
const {userModel} = require('../Models/User.model');

const userRouter = Router();

userRouter.post('/api/v1/create',async(req,res)=>{
    try {
        const {Name} = req.body;
        if(! Name){
            res.status(204).json({'message':'Empty Body'});
            return;
        }
        const newUser = new userModel({
            Name : Name
        });
        await newUser.save();
        res.status(201).json({'message':'User created','user':newUser});
    } catch (error) {
        console.log('Error while creating user');
        res.status(500).json({'message':'Internal Server Error'});
    }
})

userRouter.delete('/api/v1/delete/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        if(! id){
            res.status(400).json({'message':'User id not included in params'});
            return;
        }
        const deletedUser = userModel.findOneAndDelete({_id:id});
        res.status(200).json({'message':'User deleted successfully'});
    } catch (error) {
        console.log('Error while deleting user');
        res.status(500).json({'message':'Internal Server Error'});
    }
})

module.exports = {
    userRouter
}