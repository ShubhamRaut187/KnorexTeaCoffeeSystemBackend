const {Router} = require('express');
const {userModel} = require('../Models/User.model');
const jwt = require('jsonwebtoken');

const authRouter = Router();

authRouter.post('/api/v1/auth',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({Email:email});
        if(!user){
            res.status(404).json({'message':`user with email ${email} not found`});
            return;
        }
        const correctPasswd = user.password;
        if(correctPasswd === password){
            const token = jwt.sign({UserID:user._id},'UserToken');
            res.status(200).json({'message':`Welcome ${user.name}...!`,'user':user,'token':token});
        }
        else{
            res.status(401).json({'message':'Invalid credentials!'});
        }
    } catch (error) {
        console.log('Error while logging in');
        res.status(500).json({'message':'Internal server error'});
    }
})

module.exports = {
    authRouter
}