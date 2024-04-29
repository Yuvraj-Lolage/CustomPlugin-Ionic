const { User } = require('../models/user-model');
const jwt = require('jsonwebtoken');

require('dotenv').config()

const handleSignupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // console.log(name, email, password);  
        await User.create({
            name, email, password
        });
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}



const handleLoginUser = async (req, res) => {
    try {
        // const { email, password } = req.body;
        const isValidUser = await User.find({
            email: req.body.email, password: req.body.password
        })

        // console.log("User Details = "+isValidUser);
        if (isValidUser.length === 0) {
            return res.json({ "msg": "User is not present", "action": "signup" });
        }
        else {
            //return JWT token
            const user = isValidUser[0];
            const JWTtoken = jwt.sign({ id:user._id, name:user.name, email:user.email }, process.env.JWT_SECRET);
            return res.send(JWTtoken);
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}


module.exports = {
    handleSignupUser,
    handleLoginUser
}