const mongoose = require('mongoose');
require('dotenv').config()

const handleConnection = () => {
    const connection = mongoose.connect('mongodb://127.0.0.1:27017/e-waste', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Increased timeout to 30 seconds
      });
    return connection;
}

module.exports = { handleConnection };