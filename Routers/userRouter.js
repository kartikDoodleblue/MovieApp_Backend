const express = require("express");
const userRouter = express.Router();
// const protectRoute=require('./authHelper');
const{signup,login}=require('../controller/authController');

userRouter
.route('/signup')
.post(signup)

userRouter
.route('/login')
.post(login)

module.exports=userRouter;