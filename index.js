const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

const { handleConnection } = require("./db/connection");

//Routers
const { userRouter } = require('./routes/user-router');
const { requestRouter } = require('./routes/ewaste-request-router');
//Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

//Database Connection
const connection = mongoose.connect(process.env.DATABASE_URL)

connection ? console.log("Database connection Success"):console.log("Error Connection");  

//Routers
app.use('/users', userRouter);
app.use('/request', requestRouter);


app.listen(process.env.PORT, () => console.log(`Backend Listening on http://localhost:${process.env.PORT}`));