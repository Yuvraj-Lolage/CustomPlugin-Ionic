const express = require('express');
const userRouter = express.Router();

//controllers
const { handleSignupUser, handleLoginUser } = require('../controller/user-controller');

userRouter.route('/')
    .get((req, res) => {
        return res.send("Working");
    })

userRouter.route('/signup')
    .post(handleSignupUser)

userRouter.route('/login')
    .post(handleLoginUser)

module.exports = {
    userRouter
}